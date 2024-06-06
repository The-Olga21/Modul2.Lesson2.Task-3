import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
	const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [result, setResult] = useState('');

	const onClick = (item) => {
		if (!operator) {
			setOperand1(operand1 + item);
		} else {
			setOperand2(operand2 + item);
		}
	};

	const onClickSum = () => {
		setOperator('+');
		if (result) {
			setOperand1(result);
			setOperand2('');
		}
	};

	const onClickDifference = () => {
		setOperator('-');
		setOperand1(result);
		setOperand2('');
	};

	const onClickResult = () => {
		setOperator('=');
		if (operator === '+') {
			setResult(Number(operand1) + Number(operand2));
		} else if (operator === '-') {
			setResult(Number(operand1) - Number(operand2));
		}
	};

	const onClickReset = () => {
		setOperand1('');
		setOperand2('');
		setOperator('');
	};

	return (
		<div className={styles.app}>
			<div className={styles.card}>
				<h1>Калькулятор онлайн</h1>
				<div className={operator === '=' ? styles.result : styles.display}>
					{operator === '=' ? result : operand1 + operator + operand2}
				</div>
				<ul className={styles['buttons-container']}>
					{NUMS.map((item, index) => (
						<li className={styles['list-item-button']} key={item}>
							<button
								className={styles['item-button']}
								onClick={(e) => onClick(item)}
							>
								{item}
							</button>
						</li>
					))}
				</ul>
				<button className={styles['operators-button']} onClick={onClickSum}>
					+
				</button>
				<button
					className={styles['operators-button']}
					onClick={onClickDifference}
				>
					-
				</button>
				<button className={styles['operators-button']} onClick={onClickResult}>
					=
				</button>
				<button className={styles['operators-button']} onClick={onClickReset}>
					C
				</button>
			</div>
		</div>
	);
};

// styles['steps-item'] + ' ' + styles.done + ' ' + styles.active;

// <div class="App_display__OOet2"></div>
//operator === '=' ? 5 :
