<template>
  <div>
    <q-layout view="hHh Lpr lff" container style="height: 100vh" class="shadow-2">
      <Header @toggle-drawer="drawer = !drawer"/>
      <q-page-container class="full-height">
        <q-drawer
          v-model="drawer"
          overlay
          class="bg-grey-3"
          :class="{'opened': drawer}"
        >
          <div class="drawer-logo">
            <div class="green-bg"></div>
            <div class="black-bg q-pa-md">
              <img class="logo q-mt-xl" :src="require('src/statics/drawer-logo.png')" alt="drawer-logo">
            </div>
          </div>
          <q-list class="q-mx-auto text-bold drawer-list">
            <q-item clickable>
              <div class="check-ring-round q-mr-md"/> DASHBOARD
            </q-item>
            <q-item clickable>
              <div class="check-ring-round  q-mr-md"/> MY ORDERS
            </q-item>
            <q-item clickable>
              <div class="check-ring-round  q-mr-md "/> TERMS & COND.
            </q-item>
            <q-item clickable>
              <div class="check-ring-round q-mr-md"/> MY GET TRUCKD
            </q-item>
            <q-item clickable>
              <div class="check-ring-round q-mr-md"/> CONTACT US
            </q-item>
          </q-list>
          <div class="flex fixed-bottom q-pb-xl">
            <q-btn color="positive" text-color="black" rounded unelevated class="q-mx-auto ">
              Log out <span class="sing-in-circle q-ml-xs" />
            </q-btn>
          </div>
        </q-drawer>
        <q-page class="row no-wrap">
          <div class="col">
            <div class="full-height">
              <router-view />
              <div class="relative-position">
                <q-btn class="absolute slider-star-btn" color="warning" round>
                  <div class="star-img" />
                </q-btn>
              <q-carousel
                v-model="slide"
                swipeable
                animated
                control-color="warning"
                navigation
                arrows
                infinite
                height="370px"
                transition-prev="slide-right"
                transition-next="slide-left"
              >
<!--                <template v-slot:navigation-icon="{ active, btnProps, onClick }">-->
<!--                  <q-btn size="sm" :icon="btnProps.icon" :color="active ? 'white' : 'warning'" flat round dense @click="onClick" />-->
<!--                </template>-->
                <q-carousel-slide name="style" class="column no-wrap flex-center" img-src="'../statics/Rectangle 272.png'" />
                <q-carousel-slide name="style1" class="column no-wrap flex-center" img-src="'../statics/Rectangle 272.png'" />
                <q-carousel-slide name="style2" class="column no-wrap flex-center" img-src="'../statics/Rectangle 272.png'" />
                <q-carousel-slide name="style3" class="column no-wrap flex-center" img-src="'../statics/Rectangle 272.png'" />
                <q-carousel-slide name="style3" class="column no-wrap flex-center" img-src="'../statics/Rectangle 272.png'" />
                <q-carousel-slide name="style3" class="column no-wrap flex-center" img-src="'../statics/Rectangle 272.png'" />
              </q-carousel>
              </div>
              <div class="q-pa-lg">
                <div class="text-grey q-mb-md flex justify-between">
                  <q-icon size="19px" name="local_offer" class="tag-icon"/>
                  <span class="tags q-ml-md text-bold">#TagTest1, #TagTest2, #TagTest3, #TagTest4, #TagTest5</span>
                </div>
                <div class="q-mb-md time flex column">
                  <div class="hours flex justify-between q-mb-md">
                    <div class="flex justify-start align-center">
                      <div class="timer q-mr-sm" />
                      <span class="text-bold text-darkgrey">Hours:  12:00 PM - 9:00 PM</span>
                    </div>
                    <q-btn class="open-now-btn" rounded unelevated>Open now</q-btn>
                  </div>
                  <div class="waiting flex">
                    <div class="time-progress" />
                    <span class="text-bold text-darkgrey">Wait time: 15 minutes</span>
                  </div>
                </div>
                <div class="actions flex column">
                  <div class="flex justify-between q-mb-md">
                    <q-btn color="accent" rounded unelevated icon="comment" label="Contacts"/>
                    <q-btn color="grey-4" class="text-black text-uppercase" rounded unelevated icon-right="share" label="Share App" />
                  </div>
                  <div class="flex justify-between q-mb-md">
                    <q-btn color="warning" class="text-uppercase text-black" rounded unelevated label="open Map" icon="place"/>
                    <q-btn color="grey-6" class="text-uppercase" rounded unelevated label="truck menu" icon-right="list"/>
                  </div>
                  <div class="flex justify-between q-mb-md">
                    <q-btn color="positive" class="text-uppercase text-black" rounded unelevated  label="truck info" icon="o_description"/>
                    <q-btn color="grey-8" class="text-uppercase" rounded unelevated  label="view cart" icon-right="o_local_mall"/>
                  </div>
<!--                  $btn-bg-dark: #555A66
$btn-bg-gray: #ABABAB
$btn-bg-light-gray: #E0E0E0-->
                </div>
              </div>
            </div>
          </div>
        </q-page>
      </q-page-container>
      <Footer />
    </q-layout>
  </div>
</template>

<script>
import Header from "components/Header";
import Footer from "components/Footer";
const menuList = [
  {
    icon: 'inbox',
    label: 'Inbox',
    separator: true
  },
  {
    icon: 'send',
    label: 'Outbox',
    separator: false
  },
  {
    icon: 'delete',
    label: 'Trash',
    separator: false
  },
  {
    icon: 'error',
    label: 'Spam',
    separator: true
  },
  {
    icon: 'settings',
    label: 'Settings',
    separator: false
  },
  {
    icon: 'feedback',
    label: 'Send Feedback',
    separator: false
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    separator: false
  }
]

export default {
  components: {Footer, Header},
  data () {
    return {
      drawer: false,
      slide: 'style',
      menuList,
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep .q-drawer-container{
  .q-drawer__content {
    overflow: hidden !important;
  }
  &:not(.opened) {
    .q-drawer {
      transform: translateX(-100%) !important;
    }
  }
}
::v-deep .q-drawer{
  width: 82% !important;
}

.actions{
  .q-btn{
    width: 150px;
    height: 50px;
    font-size: 12px;
  }
}
.time{
  color: #666666;
  .hours{
    align-items: center;
    .open-now-btn{
      background-color: #E0FFF0;
      color: #26C971;
    }
  }
}
.tag-icon{
  transform: scale(-1, 1);
}
.tags{
  font-size: 12px;
}
.slider-star-btn{
  z-index: 1;
  right: 20px;
  top: 20px;
}
.header-title{
  font-size: 16px;
}
.drawer-list{
  max-width: fit-content;
}
.drawer-logo{
  position: relative;
  top: 0;
  width: 100%;
  height: 58vw;
  text-align: center;
  margin-bottom: 75px;
  .black-bg{
    z-index: 2;
    height: 100%;
    width: calc(100% + 1px);
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url("../statics/Vector 129.svg");
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
  }
  .green-bg{
    z-index: 1;
    height: 100%;
    width: calc(100% + 1px);
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url("../statics/Vector 130.svg");
    position: absolute;
    top: 0;
  }
  .logo{
    z-index: 3;
    position: relative;
    margin-bottom: auto;
    margin-top: 11vw;
  }
}
</style>
