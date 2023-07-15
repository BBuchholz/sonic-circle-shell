<script setup lang="ts">
defineOptions({
  name: 'IndexPage',
})
const user = useUserStore()
const name = $ref(user.savedName)

const router = useRouter()
function go() {
  if (name)
    router.push(`/hi/${encodeURIComponent(name)}`)
}

const { t } = useI18n()
</script>

<template>
  <div>
    <img alt="Coventry Grove Builders Association Presents logo" src="/CGBAP_LOGO_CROPPED.png">
    <p>
      <a rel="noreferrer" href="https://github.com/BBuchholz/magik-wel" target="_blank">
        MaGiK WeL
      </a>
    </p>
    <p>
      <em text-sm opacity-75>base template for all Coventry Grove Projeckts</em>
    </p>

    <div py-4 />

    <TheInput
      v-model="name"
      placeholder="enter myrKi..."
      autocomplete="false"
      @keydown.enter="go"
    />
    <label class="hidden" for="input">We require more than a mere key for entry...</label>

    <div>
      <button
        m-3 text-sm btn
        :disabled="!name"
        @click="go"
      >
        {{ t('button.go') }}
      </button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

<style>
img {
  height: 25%;
  width: 25%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
