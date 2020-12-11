<template>
  <div>
    <h2 id="title">以下にお答えください</h2>
    <hr>

    <!-- 1つ目のアンケート。ラジオボタンがクリックされたら2つ目のアンケートを表示する -->
    <div v-on:click="isSecondQuestionnaire=true">
      <p>現在、生命保険に加入されていますか？</p>
      <label>
        <input type="radio" v-model="answers.firstAnswer" value="yes">はい
      </label>
      <label>
        <input type="radio" v-model="answers.firstAnswer" value="no">いいえ
      </label>
    </div>

    <!-- 2つ目のアンケート。ラジオボタンがクリックされたら3つ目のアンケートを表示する -->
    <div v-if="isSecondQuestionnaire" v-on:click="isThirdQuestionnaire=true">
      <p>現在、入院中ですか。または、最近3ヶ月以内に医師の診断・検査の結果、入院・手術をすすめられたことはありますか？</p>
      <label>
        <input type="radio" v-model="answers.secondAnswer" value="yes">はい
      </label>
      <label>
        <input type="radio" v-model="answers.secondAnswer" value="no">いいえ
      </label>
    </div>

    <!-- 3つ目のアンケート -->
    <div v-if="isThirdQuestionnaire">
      <p>過去5年以内に、病気やけがで、手術をうけたことまたは継続して7日以上の入院をしたことがありますか？</p>
      <label>
        <input type="radio" v-model="answers.thirdAnswer" value="yes">はい
      </label>
      <label>
        <input type="radio" v-model="answers.thirdAnswer" value="no">いいえ
      </label>
    </div>

    <router-link to="/"><button>前へ戻る</button></router-link>
    <router-link to="/consultation"><button>次へ進む</button></router-link>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      // アンケートの回答を格納するオブジェクト
      answers: {
        firstAnswer: '',
        secondAnswer: '',
        thirdAnswer: ''
      },
      // 非表示のアンケートを表示に切り替える変数
      isSecondQuestionnaire: false,
      isThirdQuestionnaire: false,     
    }
  }
}
</script>

<style>
button {
  margin-right: 10px;
}
</style>