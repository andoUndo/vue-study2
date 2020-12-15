// セレクトボックスで使用する年月日を作成する
let dates = {
  // 「年」を1950年から2000年まで作成する
  getYears: function() {
    const years = [];
    for(let year = 1950; year <= 2000; year++) {
      years.push(year);
    }
    return years;
  },

  // 「月」を1月から12月まで作成する
  getMonths: function() {
    const months = [];
    for(let month = 1; month <= 12; month++) {
      months.push(month);
    }
    return months;
  },

  // 「日」を1日から31日まで作成する
  getDays: function() {
    const days = [];
    for(let day = 1; day <= 31; day++) {
      days.push(day);
    }
    return days;
  }
}

export default dates;