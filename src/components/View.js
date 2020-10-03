import React from 'react';
import styles from '../styles/View.module.css';
import {
  useFirestoreDocData,
  useStorage,
  useFirestore,
  SuspenseWithPerf,
  useStorageDownloadURL,
} from 'reactfire';

import Loader from '../components/Loader';

import {
  Link,
  useParams,
} from 'react-router-dom';
import ReactPlayer from 'react-player';

const ArView = ({ entryId }) => {
  const link = true
    ? `https://console.echoAR.xyz/webar?key=${'calm-mud-3261'}&entry=${entryId}`
    : 'http://google.com/';
  return (
    <div className={styles.arview}>
      <iframe title='ok' className={styles.iframe} src={link} />
    </div>
  );
};

const Message = ({ id }) => {
  const messageRef = useFirestore().collection('message').doc(id);
  const message = useFirestoreDocData(messageRef);

  console.log(message);

  const isAudioMessage = message.text === '' ? true : false;
  var audioMessage = useStorage().ref(message.audio);
  var audioUrl = useStorageDownloadURL(audioMessage);

  const body = isAudioMessage ? <ReactPlayer
        className={styles.audio}
        url={audioUrl}
        playing={true}
        volume={1}
        controls={true}
        autoPlay={true}
      ></ReactPlayer>
      : 
      window.responsiveVoice.speak(message.text)
      ;

  console.log(audioUrl);
  return (
    <div className={styles.msg}>
      <ArView entryId={message.entity}></ArView>
      {body}
      <Link to='/'>
        <button className={styles.button}>Send A Message</button>
      </Link>
    </div>
  );
};

const View = () => {
  let { id } = useParams();
  console.log(id);

  return (
    <div className={styles.container}>
      <SuspenseWithPerf
        fallback={<Loader></Loader>}
        traceId={'load-message-status'}
      >
        <Message id={id} />
      </SuspenseWithPerf>
    </div>
  );
};

export default View;
