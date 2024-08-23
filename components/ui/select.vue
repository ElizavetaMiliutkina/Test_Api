<template>
  <div class="mb-3">
    <label class="form-label">{{ label }}</label>
    <div class="select-wrapper" @click="toggleDropdown">
      <div class="select-display" :style="{ color: selectedValue ? 'black' : 'gray' }">
        {{ selectedValue ? getTitle() : placeholder }}
        <div>
          <span v-if="selectedValue" class="cross" @click.stop="resetSelection">&#10005;</span>
          <img src="/svg/arrow.svg" :class="{ 'rotate': showDropdown }" />
        </div>
      </div>
      <div v-if="showDropdown" class="options-container">
        <div
            v-for="option in data"
            :key="option.id"
            class="option"
            :class="{ 'selected': option.id === selectedValue }"
            @click.stop="selectOption(option)"
        >
          {{ option.title }}
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { ref } from 'vue';

export default {
  name: 'Select',
  props: {
    modelValue: [Number, String, Object, Boolean],
    data: Array,
    label: String,
    placeholder: String
  },
  setup(props, { emit }) {
    const selectedValue = ref(props.modelValue);
    const showDropdown = ref(false);

    watch(() => props.modelValue, (newValue) => {
      if (newValue !== selectedValue.value) {
        selectOption(props.data.find(option => option.id === Number(newValue)));
      }
    });

    const selectOption = (option) => {
      selectedValue.value = option.id;
      showDropdown.value = false;
      emit('update:modelValue', selectedValue.value);
    };

    const resetSelection = () => {
      selectedValue.value = '';
      emit('update:modelValue', selectedValue.value);
    };

    const toggleDropdown = () => {
      showDropdown.value = !showDropdown.value;
    };

    const getTitle = () => {
      return props.data.find(option => option.id === Number(selectedValue.value))?.title || props.placeholder;
    };

    return { selectedValue, showDropdown, selectOption, resetSelection, toggleDropdown, getTitle };
  }
};
</script>

<style scoped>
.select-wrapper {
  position: relative;
  display: inline-block;
  width: 100%;
  border: 1px solid gray;
  padding: 5px;
  cursor: pointer;
  border-radius: 4px;
  background: white;
}

.select-display {
  display: flex;
  justify-content: space-between;
}

.options-container {
  position: absolute;
  background-color: white;
  width: 100%;
  z-index: 1;
  margin-top: 8px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}

.option {
  padding: 8px 10px;
  background: white;
  color: black;
  border-bottom: 1px solid var(--color-gray);
}

.option:hover, .option.selected {
  background-color: #e5e5e5;
}

.rotate {
  transform: rotate(180deg);
  transition: transform 0.3s ease;
}
.cross:hover {
  color: var(--color-red);
}
</style>


