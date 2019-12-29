<template>
  <div class="redRain">
    <div class="time">
      <span class="clock">{{invertedTime}}</span>
    </div>
    <ul id="rain_anim" class="rain_anim">
      <template v-for="(item,index) in rainArr">
        <li
          :key="index"
          :style="{left:item.left,animationDuration: item.downTime, webkitAnimationDuration: item.downTime}"
          @webkitAnimationEnd="removeDom"
          @click="bombCloud($event,index)"
          class="movie"
          :class="`movieBox`+index"
        >
          {{invertedTime}}
          <a href="javascript:;">
            <span class="bombCloud" v-if="activeIndex == index" :class="clickEffect?'spanAnim':''"></span>
            <i
              class="redBox"
              :style="{ transform: item.transforms, webkitTransform: item.transforms}"
            ></i>
          </a>
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      invertedTime: Math.floor(Math.random() * 10) + 5, //随机一个数字，放在闹钟中做倒计时用
      rainArr: [],
      timer: null,
      clickEffect: false,
      activeIndex:-1,
    };
  },
  methods: {
    starRain() {
      let wid =
        document.body.clientWidth || document.documentElement.clientWidth;
      let left = parseInt(Math.random() * (wid - 100) + 0);
      let downTime = "3s";
      this.rainArr.push({
        left: left + "px",
        downTime: downTime
      });
      let allTime = setTimeout(() => {
        clearTimeout(this.timer);
        clearTimeout(allTime);
        // console.log("长定时器");
        return;
      }, this.invertedTime * 1000);
      this.timer = setTimeout(() => {
        this.starRain();
        // console.log("短定时器");
      }, 400);
    },
    bombCloud(e, index) {
      console.log(e, index);
      this.clickEffect = false;
      this.clickEffect = true;
      if (this.activeIndex !== index) {
        this.activeIndex = index;
      document
        .querySelector(".movieBox" + index)
        .querySelector(".redBox")
        .remove();
      }
    },
    removeDom(e) {
      // console.log(e.currentTarget);
      let targe = e.currentTarget;
      document.querySelector("#rain_anim").removeChild(targe);
    },
    startClock() {
      let clock = window.setInterval(() => {
        this.invertedTime--;
        if (this.invertedTime < 0) {
          this.invertedTime = 0;
          window.clearInterval(clock);
        }
      }, 1000);
    }
  },
  mounted() {
    this.startClock();
    this.starRain();
    console.log(this.invertedTime);
  }
};
</script>
<style scoped lang="scss">
.redRain {
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0;
  .time {
    width: 100%;
    position: absolute;
    text-align: center;
    transition: top 2s;
    top: 0px;
    .clock {
      background: url("../assets/image/clock.png") no-repeat;
      background-size: 100% 100%;
      background-position: center 0;
      width: 88px;
      height: 144px;
      display: block;
      margin: 0 auto;
      color: #c84300;
      letter-spacing: 0;
      line-height: 210px;
      text-align: center;
      font-size: 40px;
    }
  }
  .rain_anim {
    display: block;
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    i {
      width: 174px;
      height: 174px;
      display: block;
      background: url("../assets/image/redbox.png") no-repeat;
      background-size: 100% 100%;
      margin: 13px auto;
      transform: rotate(-30deg)
    }
    li {
      position: absolute;
      width: 200px;
      height: 200px;
      touch-action: none;
      z-index: 10;
      top: -200px;
      &.movie {
        animation: scoll linear 0s forwards;
        .bombCloud {
          width: 200px;
          height: 200px;
          display: none;
        }
        .spanAnim {
          display: inline-block;
          animation: bomb 0.3s;
        }
      }
    }
  }
}
@keyframes scoll {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(185vw);
  }
}
@keyframes bomb {
  0% {
    background: url("../assets/image/bomb2.png") no-repeat;
    background-size: 200px 200px;
    object-fit: cover;
  }
  5% {
    background: url("../assets/image/bomb2.png") no-repeat;
    object-fit: cover;
    background-size: 200px 200px;
  }
  10% {
    background: url("../assets/image/bomb3.png") no-repeat;
    object-fit: cover;
    background-size: 200px 200px;
  }
  20% {
    background: url("../assets/image/bomb4.png") no-repeat;
    object-fit: cover;
    background-size: 200px 200px;
  }
  30% {
    background: url("../assets/image/bomb5.png") no-repeat;
    object-fit: cover;
    background-size: 200px 200px;
  }
  60% {
    background: url("../assets/image/bomb6.png") no-repeat;
    object-fit: cover;
    background-size: 200px 200px;
  }
  100% {
    background: url("../assets/image/bomb7.png") no-repeat;
    object-fit: cover;
    background-size: 200px 200px;
  }
}
</style>