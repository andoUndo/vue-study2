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
        <option v-for="nextYear in dates.years" :key="nextYear">
          {{ nextYear }}
        </option>
      </select>
      {{ dateStr.yearStr }}

      <!-- 月の入力 -->
      <select v-model="birthday.month">
        <option v-for="nextMonth in dates.months" :key="nextMonth">
          {{ nextMonth }}
        </option>
      </select>
      {{ dateStr.monthStr }}

      <!-- 日の入力 -->
      <select v-model="birthday.day">
        <option v-for="nextDay in dates.days" :key="nextDay">
          {{ nextDay }}
        </option>
      </select>
      {{ dateStr.dayStr }}
    </div>

    <router-link to="/questionnaire"><button>次へ進む</button></router-link>
  </div>
</template>

<script>
export default {
  data: function() {
      return {
        // 性別を格納する変数
        gender: '',
        // 日付を表示するための配列オブジェクト
        dates: {
          years: [],
          months: [],
          days: []
        },
        // 日付に年月日の単位を付与するための変数
        dateStr: {
          yearStr: '年', 
          monthStr: '月',
          dayStr: '日'
        },
        // ユーザーの入力した誕生日を格納する変数
        birthday: {
          year: '',
          month: '',
          day: ''
        }
      }
    },
  created() {
    // 生年月日の「年」の数値を、1950年から2000年まで作成する
    for(let i = 1950; i <= 2000; i++) {
      this.dates.years.push(i);
    }
    // 生年月日の「月」の数値を、1月から12月まで作成する
    for(let i = 1; i <= 12; i++) {
      this.dates.months.push(i);
    }
    // 生年月日の「日」の数値を、1日から31日まで作成する
    for(let i = 1; i <= 31; i++) {
      this.dates.days.push(i);
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