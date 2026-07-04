const display = document.getElementById('display');

        function appendValue(value) {
            display.value += value;
        }

        function clearDisplay() {
            display.value = '';
        }

        function deleteLast() {
            display.value = display.value.slice(0, -1);
        }

        function calculate() {
            if (display.value === "") {
                display.value = "Please Enter A value"
                display.style.color = "red";
                display.style.fontSize = "19px"
                return;
            }
            try {
                display.value = eval(display.value.replace('%', '/100'));
            } catch {
                display.value = 'Error';
            }
        }