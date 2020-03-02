<template>
  <div class="listitem">
    <img :src="gooditem.show.img" />
    <div class="listinfo">
      <p>{{ gooditem.title }}</p>
      <span class="price">{{ gooditem.price }}</span>
      <span class="cfav">{{ gooditem.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListItem",
  props: {
    gooditem: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style>
.listitem {
  width: 48%;
}
.listitem img {
  width: 100%;
  border-radius: 5px;
}
.listinfo {
  text-align: center;
  font-size: 12px;
  overflow: hidden;
}
.listinfo p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.listinfo .cfav {
  position: relative;
}

.listinfo .cfav::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>