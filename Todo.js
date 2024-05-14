import React, { useState } from 'react';

export default function App() {
  const [inputVal, setInputValue] = useState('');
  const [list, setList] = useState([]);
  const [editedVal, setEditedVal] = useState('');
  const [itemIndex, setItemIndex] = useState();

  const onChnageVal = (e) => {
    setInputValue(e.target.value);
  };
  const AddItem = () => {
    console.log(itemIndex);
    if (list.includes(editedVal)) {
      list.splice(itemIndex, 1);
      const updatedArray = list;
      // const updatedArray = list.filter((e,i)=>{
      //   return i !== itemIndex;
      // })
      setList([...updatedArray, inputVal]);
      setInputValue('');
    } else {
      setList([...list, inputVal]);
      setInputValue('');
    }
  };

  const remove = (item) => {
    // console.log("removed")
    // list.splice(item,1)
    // const a = [].concat(list);
    // console.log(a);
    // setList(a)

    const newArray = list.filter((e, i) => {
      return i !== item;
    });
    console.log(newArray);
    setList(newArray);
  };

  const onEdit = (e, item) => {
    setInputValue(e);
    setEditedVal(e);
    setItemIndex(item);
  };

  return (
    <>
      TODO List
      <div>
        <input
          type="text"
          placeholder="Add Item"
          value={inputVal}
          onChange={onChnageVal}
        />
        <button onClick={AddItem}>Add</button>
      </div>
      <br />
      <div>
        {list.map((e, i) => {
          return (
            <>
              <div key={i}>
                {' '}
                {e}
                <button
                  onClick={() => {
                    remove(i);
                  }}
                >
                  remove
                </button>
                <button
                  onClick={() => {
                    onEdit(e, i);
                  }}
                >
                  edit
                </button>
              </div>
              <br />
            </>
          );
        })}
      </div>
    </>
  );
}
