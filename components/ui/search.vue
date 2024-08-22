<template>
  <div class="input-group mb-3" :class="{ 'focus': isFocused }">
    <span class="input-group-text" id="basic-addon1">
      <img src="/svg/search.svg" />
    </span>
    <input v-model="localValue"
           type="text"
           class="form-control"
           placeholder="Поиск продукта или отрасли"
           @focus="isFocused = true"
           @blur="isFocused = false"
    >
    <span v-if="localValue" class="cross" @click.stop="closeBtn">&#10005;</span>
    <span class="input-group-text btn-type" id="basic-addon2" @click="searchBtn">Найти</span>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  modelValue: String
});

const emit = defineEmits(['search']);
const localValue = ref(props.modelValue);
const isFocused = ref(false);

const searchBtn = () => {
  emit('search', localValue.value);
};

const closeBtn = () => {
  localValue.value = ''
  emit('search', localValue.value);
};

watch(() => props.modelValue, (newValue) => {
  localValue.value = newValue;
});
</script>


<style scoped>
.input-group{
  border: 0.08rem solid var(--color-gray);
  border-radius: 4px;
}
.input-group.focus{
  border: 0.08rem solid var(--color-blue);
  box-shadow: var(--color-blue);
}
.input-group-text {
  background: unset;
  border: none;
}
.input-group-text.btn-type{
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--color-blue);
  color: white;
  cursor: pointer;
  border-radius: 4px;
  width: 80px;
  margin-right: -1px;
}
.input-group-text.btn-type:hover{
  opacity: .8
}
.form-control {
  box-shadow: none;
  border: none;
}
.cross {
  font-size: 24px;
  cursor: pointer;
  margin-right: 12px;
}
.cross:hover {
  color: var(--color-red);
}
</style>


