import { onMounted, onUnmounted, ref } from "vue";

export default function useMobileApp() {
  const isMobile = ref(false);

  const checkScreen = () => {
    isMobile.value = window.innerWidth <= 768;
  };

  onMounted(() => {
    checkScreen();
    window.addEventListener("resize", checkScreen);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", checkScreen);
  });

  return {
    isMobile,
  };
}
