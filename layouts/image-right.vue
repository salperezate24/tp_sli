<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  image: {
    type: String,
  },
  class: {
    type: String,
  },
  backgroundSize: {
    type: String,
    default: 'cover',
  },
})

function resolveAssetUrl(url: string) {
  if (url.startsWith('/'))
    return import.meta.env.BASE_URL + url.slice(1)
  return url
}

function handleBackground(background?: string, dim = false, backgroundSize = 'cover') {
  const isColor = background && (background[0] === '#' || background.startsWith('rgb'))

  const style: Record<string, string | undefined> = {
    background: isColor ? background : undefined,
    color: background && !isColor ? 'white' : undefined,
    backgroundImage:
      isColor
        ? undefined
        : background
          ? dim
            ? `linear-gradient(#0005, #0008), url(${resolveAssetUrl(background)})`
            : `url("${resolveAssetUrl(background)}")`
          : undefined,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize,
  }

  if (!style.backgroundImage)
    delete style.backgroundImage

  if (!style.background)
    delete style.background

  return style
}

const style = computed(() => handleBackground(props.image, false, props.backgroundSize))
</script>

<template>
  <div class="slidev-layout image-right relative h-full w-full pb-10">
    <div class="grid h-full w-full auto-rows-fr grid-cols-2">
      <div class="slidev-layout default" :class="props.class">
        <slot />
      </div>
      <div class="h-full w-full" :style="style" />
    </div>
    <ThesisFooter />
  </div>
</template>

