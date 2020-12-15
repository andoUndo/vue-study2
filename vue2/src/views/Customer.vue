<template>
  <div>
    <h2 id="title">お客様の情報を入力してください</h2>
    <hr>

    <!-- 性別の入力欄 -->
    <div>
      <p>-性別-</p>
      <label>
        <input type="radio" v-model="gender" value="man">男性
      </label>
      <label>
        <input type="radio" v-model="gender" value="woman">女性
      </label>
    </div>

    <!-- 生年月日を入力するセレクトボックス -->
    <div>
      <p>-生年月日-</p>
      
      <!-- 年の入力 -->
      <select v-model="birthday.year">
        <option v-for="nextYear in years" :key="nextYear">
          {{ nextYear }}
        </option>
      </select>
      {{ '年' }}

      <!-- 月の入力 -->
      <select v-model="birthday.month">
        <option v-for="nextMonth in months" :key="nextMonth">
          {{ nextMonth }}
        </option>
      </select>
      {{ '月' }}

      <!-- 日の入力 -->
      <select v-model="birthday.day">
        <option v-for="nextDay in days" :key="nextDay">
          {{ nextDay }}
        </option>
      </select>
      {{ '日' }}
    </div>

    <router-link to="/questionnaire"><button>次へ進む</button></router-link>
  </div>
</template>

<script>
import dates from '@/externals/definition.js'

export default {
  data: function() {
      return {
        // 性別を格納する変数
        gender: '',

        // ユーザーの誕生日を格納するオブジェクト
        birthday: {
          year: '',
          month: '',
          day: ''
        },

        // セレクトボックスに表示する年月日の値を、それぞれ取得する
        years: dates.getYears(),
        months: dates.getMonths(),
        days: dates.getDays()
      }
    }
}
</script>

<style>
#title {
  font-size: 20px;
}

button {
  margin-top: 30px;
}
</style>