<template>
  <div class="input-wrapper">
    <input :value="value" type="text" :disabled="disabled" :readonly="readonly" :placeholder="placeholder" class="error">
  </div>
</template>

<script>
export default {
  name: "EasyInput",
  props: {
    value: {
      type: String
    },
    placeholder: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
@import "../stylus/common/var";
.input-wrapper {
  display: inline-block;
  font-size: $--easy-default-font-size;
  > input {
    font-size: inherit;
    padding: 0 15px;
    height: 40px;
    line-height: 40px;
    box-sizing: border-box;
    border: solid 1px $--easy-default-border-color;
    border-radius: 4px;
    color: $--easy-default-font-color;
    &::placeholder {
      color: $--easy-placeholder-color;
    }
    &:hover {
      border-color: $--easy-hover-border-color;
    }
    &:focus {
      outline: none;
      border-color: $--easy-primary-blue;
    }
    &:disabled {
      border-color: $--easy-default-border-color;
      background: $--easy-disabled-background-color;
      cursor: not-allowed;
    }
  }
}
</style>
