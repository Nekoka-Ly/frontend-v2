<i18n>
  {
    "zh": {
      "bulletin": {
        "bulletin_0": "1月16日海外版正式上线，为了避免数据混淆，请只上传国服的掉落。",
        "bulletin_1": "专用于海外版的素材统计站是否开放正在计划中。",
        "bulletin_2": "另外，希望有会韩语的博士可以一起来完成网站韩语化工作。"
      }
    },
    "en": {
      "bulletin": {
        "bulletin_0": "Arknights EN server was officially released on 1/16. In order not to mess up the data, please only submit drop data from CN server.",
        "bulletin_1": "We are considering whether to open another website for overseas servers.",
        "bulletin_2": "In addition, we are sincerely looking for someone who can help us translate the website into Korean."
      }
    },
    "ja": {
      "bulletin": {
        "bulletin_0": "1月16日に海外版が正式にリリースされます。データの混雑を避けるために、当サイトでは大陸版のドロップデータのみをアップロードして下さい。",
        "bulletin_1": "海外版のドロップまとめサイトを開設するかは現時点では思案中のみとなっています。",
        "bulletin_2": "さらに、ウェブサイトを韓国語に翻訳する方を募集しています。"
      }
    }
  }
</i18n>

<template>
  <v-card class="bkop-light pa-6">
    <h1 class="headline font-weight-black">
      {{ $t('menu.about.bulletin') }}
    </h1>
    <v-row>
      <v-col
        cols="12"
        class="subtitle-1 line-height-wide font-weight-bold"
        style="word-break: normal"
      >
        <span>{{ $t('bulletin.bulletin_0') }}</span>
        <br>
        <span>{{ $t('bulletin.bulletin_1') }}</span>
        <br>
        <span>{{ $t('bulletin.bulletin_2') }}</span>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'Bulletin'
}
</script>

<style scoped>
.line-height-wide {
  line-height: 1.8;
}
</style>