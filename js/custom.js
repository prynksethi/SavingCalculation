$(document).ready(function() {
  $('#button').click(function(e) {

    e.preventDefault();
    var name= $('#name').val();
    var interest;
	var age = parseInt($('#age').val());
	var retirement = parseInt($('#retireAge').val());
	var salaryIncrease = parseInt($('#salaryIncrement').val())/100;
	var expenseIncrease = parseInt($('#expenseIncrement').val())/100;
	var interestSavings = parseInt($('#savingInterest').val())/100;
	var ageArray = [age];
	var initialSavings = parseInt($('#currentSavings').val());
    var salary = parseInt($('#currentSalary').val());
    var expenses = parseInt($('#currentExpenses').val());

    var balanceArray = [];

    var balance = initialSavings + salary - expenses;
    balanceArray.push(balance);
    //balanceArray[0];

	while (balance>=0 && age<=200) {
    	if(age>=retirement) {
    		salary = 0;
    	}
    	salary= salary+ salary*salaryIncrease;
    	expenses = expenses + expenses*expenseIncrease;
    	interest = balance*interestSavings;
    	balance = balance+interest+salary-expenses;
    	balanceArray.push(balance);
    	age++;
    	ageArray.push(age);
    	console.log(balanceArray, ageArray);
    }
	
	$('#container').highcharts({
        title: {
            text: 'Bank Balance Chart',
            x: -20 //center
        },
         subtitle: {
            text: name,
            x: -20
        },
        xAxis: {
        	title: {
                text: 'Age'
            },

            categories: ageArray
        },
        yAxis: {
            title: {
                text: 'Balance'
            },
            plotLines: [{
                value: 0,
                width: 1,
                color: '#808080'
            }]
        },
        tooltip: {
            enabled: false
        },
        series: [{
        	showInLegend: false, 
            data: balanceArray
        }]
    });

  });
});