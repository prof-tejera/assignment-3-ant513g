import ReactDOM from 'react-dom';
import styled from 'styled-components';

const BoxContainer = styled.div `
  text-align: center;
  margin: auto;
  padding: 1rem;
  overflow: auto;
  box-sizing: border-box;
  border: none;
  display: block;
  font-size: 16px;
  vertical-align: baseline;
  cursor: pointer; 
`;
  
const Select = styled.select`
  width: 50px;
  display: block;
  font-family: 'Inconsolata', monospace;
  font-size: 16px;
  color: #f2f2f2;
  background-color: #4A4A55;
  border: none;
  text-align: center;
  font-weight: 500;
  margin: 8px;
  border-radius: 8px;
  cursor: pointer; 
`;

const Option = styled.option`
&:hover {
  font-weight: 700;
  background-color: #4037C4;
}
`;

const Label = styled.label`
  font-family: 'Courier Prime', monospace;
  font-size: 16px;
  color: white;
  border: none;
  text-align: center;
  margin: auto;
  text-align: center;
`;


export default function Input(props) {

  const { onChange, value, name } = props;
  
  return (

    <BoxContainer>
      <Label
        HTMLfor={name}
        value={value}>
        {name}
      </Label>
      <Select
        name={name}
        size="5"
        onChange={onChange}
        value={value}
        >
          <Option value='0'>0</Option>
          <Option value='1'>1</Option>
          <Option value='2'>2</Option>
          <Option value='3'>3</Option>
          <Option value='4'>4</Option>
          <Option value='5'>5</Option>
          <Option value='6'>6</Option>
          <Option value='7'>7</Option>
          <Option value='8'>8</Option>
          <Option value='9'>9</Option>
          <Option value='10'>10</Option>
          <Option value='11'>11</Option>
          <Option value='12'>12</Option>
          <Option value='13'>13</Option>
          <Option value='14'>14</Option>
          <Option value='15'>15</Option>
          <Option value='16'>16</Option>
          <Option value='17'>17</Option>
          <Option value='18'>18</Option>
          <Option value='19'>19</Option>
          <Option value='20'>20</Option>
          <Option value='21'>21</Option>
          <Option value='22'>22</Option>
          <Option value='23'>23</Option>
          <Option value='24'>24</Option>
          <Option value='25'>25</Option>
          <Option value='26'>26</Option>
          <Option value='27'>27</Option>
          <Option value='28'>28</Option>
          <Option value='29'>29</Option>
          <Option value='30'>30</Option>
          <Option value='31'>31</Option>
          <Option value='32'>32</Option>
          <Option value='33'>33</Option>
          <Option value='34'>34</Option>
          <Option value='35'>35</Option>
          <Option value='36'>36</Option>
          <Option value='37'>37</Option>
          <Option value='38'>38</Option>
          <Option value='39'>39</Option>
          <Option value='40'>40</Option>
          <Option value='41'>41</Option>
          <Option value='42'>42</Option>
          <Option value='43'>43</Option>
          <Option value='44'>44</Option>
          <Option value='45'>45</Option>
          <Option value='46'>46</Option>
          <Option value='47'>47</Option>
          <Option value='48'>48</Option>
          <Option value='49'>49</Option>
          <Option value='50'>50</Option>
          <Option value='51'>51</Option>
          <Option value='52'>52</Option>
          <Option value='53'>53</Option>
          <Option value='54'>54</Option>
          <Option value='55'>55</Option>
          <Option value='56'>56</Option>
          <Option value='57'>57</Option>
          <Option value='58'>58</Option>
          <Option value='59'>59</Option>
        </Select>
      </ BoxContainer>
     
  );
}

ReactDOM.render(
  <Input />,
  
  document.getElementById('root')
);

