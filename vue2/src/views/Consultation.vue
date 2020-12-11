<template>
  <div>
    <h2 id="title">ご相談内容をご記入ください</h2>
    <hr>

    <!-- 相談内容の入力欄 -->
    <div>
      <textarea rows="20" cols="60" v-model="consultationContent"></textarea>
    </div>

    <router-link to="/questionnaire"><button>前へ戻る</button></router-link>
    <button>次へ進む</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      consultationContent: ''
    }
  }
}
</script>

<style>
textarea {
  margin-top: 10px;
}
</style>