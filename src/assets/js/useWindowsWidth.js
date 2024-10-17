import { computed, onMounted, onUnmounted, ref } from "vue";

export function useWindowsWidth() {
  let windowWidth = ref(window.innerWidth);

  const onWidthChange = () => (windowWidth.value = window.innerWidth);
  onMounted(() => window.addEventListener("resize", onWidthChange));
  onUnmounted(() => window.removeEventListener("resize", onWidthChange));

  const type = computed(() => {
    if (windowWidth.value < 768) return "mobile";
    if (windowWidth.value >= 768 && windowWidth.value < 1024) return "medium";
    if (windowWidth.value >= 1024 && windowWidth.value < 1280) return "tablet";
    if (windowWidth.value >= 1280) return "desktop";
    return null; // This is an unreachable line, simply to keep eslint happy.
  });

  let width = computed(() => {
    return windowWidth.value;
  });
  return { width, type };
}
