import { Avatar, Card } from 'antd';
import './style.module.scss';
import React, {useEffect, useMemo, useRef, useState} from "react";
import uuid4 from "uuid4";

const { Meta } = Card;

const PostContent = React.memo(({like}) => {
  return (
    <>
      <p>Like: {like}</p>
      <p>{uuid4()}</p>
      <button>Comment</button>
      <div>
        <div>
          <p>List comments</p>
          <ul>
            <li>awesome</li>
            <li>i love it</li>
          </ul>
        </div>
      </div>
    </>
  )
})

const Post = React.memo(({img, like}) => {
  const content = useMemo(() => {
    return (
      <>
        <p>Like: {like}</p>
        <p>{uuid4()}</p>
        <button>Comment</button>
        <div>
          <div>
            <p>List comments</p>
            <ul>
              <li>awesome</li>
              <li>i love it</li>
            </ul>
          </div>
        </div>
      </>
    )
  }, [like])

  return (
    <div>
      <img style={{
        height: '100px'
      }} src={img} alt=""/>
      {content}
    </div>
  )
});

export default function ContentFacebook () {
  const [data, setData] = useState([]);
  const elRef = useRef(null);
  const listElRef = useRef([]);

  useEffect(() => {
    handleGetData(1);
  }, []);

  useEffect(() => {
    elRef.current.addEventListener('scroll', handleScroll);
    return () => {
      elRef.current.removeEventListener('scroll', handleScroll);
    };
  }, [data]);

  const handleScroll = (e) => {
    console.log(e.target.scrollTop + e.target.clientHeight);
    if (e.target.scrollHeight - (e.target.scrollTop + e.target.clientHeight) < 600) {
      console.log('ssdsds')
      handleGetData(1);
      // debounce(timeRef.current['getData'], () => {
      // }, 500)
    }
  }

  const handleGetData = async (page: number) => {
    const response = await fetch('api/getData', {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const posts = await response.json();
    console.log('getdata');
    setData([...data, ...posts]);
  }

  const handleChangeData = () => {
    console.log('change')
    const newData = [...data];
    newData[2].img = 'https://cdn-dev.edualpha.jp/slide_thumb/1697797988019_1697797987796_10578';
    console.log(newData);
    setData(newData);
    // setData((current: any[]) => {
    //   return current.map((item: any, key: number) => {
    //     if (key === 2) {
    //       item.img = 'https://cdn-dev.edualpha.jp/slide_thumb/1697797988019_1697797987796_10578';
    //     }
    //     return item;
    //   });
    // });
  }

  return (
    <>
      <div ref={elRef} style={{
        height: 800,
        overflow: 'scroll',
      }}>
        <div></div>
        {data.map((data, index) => {
          return (<Post key={`post${index}`} img={data.img} like={data.like} />)
        })}
      </div>
      <button onClick={handleChangeData}>Change</button>
    </>
  )
}