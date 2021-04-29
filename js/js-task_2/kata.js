function basicOp(operation, value1, value2) {
	if (operation == '+') return value1 + value2
	if (operation == '-') return value1 - value2
	if (operation == '*') return value1 * value2
	if (operation == '/') return value1 / value2
}

function bonusTime(salary, bonus) {
	if (bonus == true) { return "\u00A3" + salary * 10 }
	else (bonus == false)
	{ return "\u00A3" + salary }
}

function getGrade(s1, s2, s3) {
  let x = (s1 + s2 + s3) / 3
  if (x >= 90) return 'A'
  else if (x >= 80 ) return 'B'
  else if (x >= 70 ) return 'C'
  else if (x >= 60 ) return 'D'
  else if (x >= 0 ) return 'F'
}
