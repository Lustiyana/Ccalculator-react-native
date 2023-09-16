/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Button from './src/components/Button';
import {styles} from './src/style';

const operator = ['x', '/', '+', '-'];
function App(): JSX.Element {
  let [result, setResult] = useState('');
  const [calculate, setCalculate] = useState('');
  const [openCalculate, setOpenCalculate] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (result.length === 0) {
      setOpenCalculate(false);
    }
    if (openCalculate) {
      handleCalculate();
      if (result === '-') {
        setCalculate('');
      }
    }
  }, [result]);

  const handlePress = (value: string) => {
    setCount(count + 1);
    const firstString = value.charAt(0);
    const lastString = result[result.length - 1];
    let customValue = value;
    let customResult = result;

    if (count === 0) {
      if (operator.includes(firstString) && firstString !== '-') {
        customValue = '';
        customResult = '';
      }
    }
    if (operator.includes(lastString) && operator.includes(value)) {
      customValue = '';
    } else {
      customValue;
    }

    let input = customResult + customValue;
    console.log(input);

    if (input.charAt(0) === '0') {
      setResult(input.slice(1));
    } else {
      setResult(input);
    }
  };

  const handleClear = () => {
    setResult('');
    setCalculate('');
    setCount(0);
  };

  const handleBackspace = () => {
    if (result.length > 0) {
      setResult(result.slice(0, -1));
    }
  };

  const handleCalculate = () => {
    try {
      if (result.includes('x')) {
        result = result.replace('x', '*');
      }
      if (result.includes('%')) {
        result = result.replace('%', '/100');
      }
      setCalculate(eval(result).toString());
      setOpenCalculate(true);
    } catch (e) {
      setCalculate(calculate);
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.result}>
        {result.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
      </Text>
      {openCalculate && calculate !== '' ? (
        <Text style={styles.calculate}>
          {calculate.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </Text>
      ) : null}
      <View style={styles.buttonWrap}>
        <View style={styles.button}>
          <Button textStyle={styles.textGreen} onPress={handleClear}>
            C
          </Button>
          <Button onPress={() => handlePress('7')}>7</Button>
          <Button onPress={() => handlePress('4')}>4</Button>
          <Button onPress={() => handlePress('1')}>1</Button>
          <Button onPress={() => handlePress('%')}>%</Button>
        </View>
        <View style={styles.button}>
          <Button textStyle={styles.textGreen} onPress={() => handlePress('/')}>
            /
          </Button>
          <Button onPress={() => handlePress('8')}>8</Button>
          <Button onPress={() => handlePress('5')}>5</Button>
          <Button onPress={() => handlePress('2')}>2</Button>
          <Button onPress={() => handlePress('0')}>0</Button>
        </View>
        <View style={styles.button}>
          <Button textStyle={styles.textGreen} onPress={() => handlePress('x')}>
            x
          </Button>
          <Button onPress={() => handlePress('9')}>9</Button>
          <Button onPress={() => handlePress('6')}>6</Button>
          <Button onPress={() => handlePress('3')}>3</Button>
          <Button onPress={() => handlePress('.')}>.</Button>
        </View>
        <View style={styles.button}>
          <Button textStyle={styles.textGreen} onPress={handleBackspace}>
            Del
          </Button>
          <Button textStyle={styles.textGreen} onPress={() => handlePress('-')}>
            -
          </Button>
          <Button textStyle={styles.textGreen} onPress={() => handlePress('+')}>
            +
          </Button>
          <Button
            style={{
              flex: 1,
              backgroundColor: '#00B568',
              borderRadius: 8,
              justifyContent: 'center',
            }}
            onPress={handleCalculate}>
            =
          </Button>
        </View>
      </View>
    </View>
  );
}

export default App;
