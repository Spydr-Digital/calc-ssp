(() => {
  // index.js
  $(document).ready(function() {
    $("#income").keyup(function(event) {
      if (event.which >= 37 && event.which <= 40)
        return;
      $(this).val(function(index, value) {
        return "\xA3" + value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      });
    });
    $("#monthly-saving").attr({
      "max": 150,
      "min": 10
    });
    $("#dmGo").click(function() {
      let savingPeriod = $("input[name='period']:checked").val();
      let monthlySaving = Number($("#monthly-saving").val());
      let dmValue = monthlySaving + monthlySaving * 0.5;
      let getIncome = $("#income").val().split(",").join("");
      let totalIncome = getIncome.replace(/\D/g, "");
      let incomeMin = 12570;
      if ($("#monthly-saving").val() < 10 || $("#monthly-saving").val() > 150) {
        $("#savingError").show();
        $("#result").hide();
      } else {
        $("#savingError").hide();
        $("#result").show();
      }
      if (totalIncome < incomeMin) {
        $("#incomeMin").show();
      } else {
        $("#incomeMin").hide();
        $("#result").show();
      }
      let eng0 = 0;
      let eng1 = 28;
      let eng2 = 42;
      let eng3 = 47;
      let scot0 = 0;
      let scot1 = 27;
      let scot2 = 28;
      let scot3 = 29;
      let scot4 = 50;
      let scot5 = 44;
      let scot6 = 47;
      let scot7 = 50;
      if (savingPeriod == "eng") {
        if (totalIncome > 125140) {
          taxCalc = monthlySaving * (1 - eng3 / 100);
        } else if (totalIncome > 50270 && totalIncome <= 125140) {
          taxCalc = monthlySaving * (1 - eng2 / 100);
        } else if (totalIncome > 12570 && totalIncome <= 50270) {
          taxCalc = monthlySaving * (1 - eng1 / 100);
        } else if (totalIncome <= 12570) {
          taxCalc = monthlySaving;
        } else {
          taxCalc = "Error";
        }
      } else if (savingPeriod == "scot") {
        if (totalIncome > 125139) {
          taxCalc = monthlySaving * (1 - scot7 / 100);
        } else if (totalIncome > 75e3 && totalIncome <= 125139) {
          taxCalc = monthlySaving * (1 - scot6 / 100);
        } else if (totalIncome > 50270 && totalIncome <= 75e3) {
          taxCalc = monthlySaving * (1 - scot5 / 100);
        } else if (totalIncome > 43662 && totalIncome <= 50270) {
          taxCalc = monthlySaving * (1 - scot4 / 100);
        } else if (totalIncome > 26561 && totalIncome <= 43662) {
          taxCalc = monthlySaving * (1 - scot3 / 100);
        } else if (totalIncome > 14876 && totalIncome <= 26561) {
          taxCalc = monthlySaving * (1 - scot2 / 100);
        } else if (totalIncome > 12570 && totalIncome <= 14876) {
          taxCalc = monthlySaving * (1 - scot1 / 100);
        } else if (totalIncome <= 12570) {
          taxCalc = monthlySaving;
        } else {
          taxCalc = "Error";
        }
      }
      let taxCalcRnd = Math.round(taxCalc * 100) / 100;
      $("#dmShareCost").text(formatNumber(taxCalcRnd));
      $("#dmShareValue").text(formatNumber(dmValue));
    });
    function formatNumber(num) {
      return new Intl.NumberFormat().format(num);
    }
  });
})();
