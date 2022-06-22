<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: {
    testMessage() {
      if (this.msg)
        return `TEST: ${this.msg}`;
      return 'No Message';
    },
    notTested() {
      return this.msg;
    },
  },
};
</script>
