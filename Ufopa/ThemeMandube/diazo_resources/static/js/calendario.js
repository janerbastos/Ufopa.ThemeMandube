var yy;
	var calendarArray =[];
	var monthOffset = [6,7,8,9,10,11,0,1,2,3,4,5];
	var monthArray = [["Jan","Janeiro"],["FEV","Fevereiro"],["MAR","Março"],["ABR","Abril"],["MAI","Maio"],["JUN","Junho"],["JUL","Julho"],["AGO","Agosto"],["SET","Setembro"],["OUT","Outubro"],["NOV","Novembro"],["DEZ","Dezembro"]];
	var letrasArray = ["Seg","Ter","Qua","Qui","Sex","Sab","Dom"];
	var dayArray = ["7","1","2","3","4","5","6"];
	$(document).ready(function() {
		$(document).on('click','.calendar-day.have-events',activateDay);
		$(document).on('click','.specific-day',activatecalendar);
		$(document).on('click','.calendar-month-view-arrow',offsetcalendar);
		$(window).resize(calendarScale);
		calendarSet();
		calendarScale();
});