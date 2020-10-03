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
  // const router = useRouter();

  var audioMessage = useStorage().ref('original audio.wav');
  var audioUrl = useStorageDownloadURL(audioMessage);

  return (
    <div className={styles.msg}>
      <ArView entryId={'41a7cc9c-9f7c-4c08-974d-7968967d82b6'}></ArView>
      <audio src={audioUrl} autoPlay={true}></audio>
      <a href='/posts/first-post' className={styles.buttonContainer}>
        <button className={styles.button}>Send A Message</button>
      </a>
    </div>
  );
};

const View = () => {
  return <Loader/>
  // const router = useRouter();
  // const msgId = router.query['msg'];

  // console.log(router.query.msg);

  // if (msgId == '' || msgId == null) {
  //   return <Loader></Loader>;
  // }

  // return (
  //   <div className={styles.container}>
  //     <SuspenseWithPerf
  //       fallback={<Loader></Loader>}
  //       traceId={'load-message-status'}
  //     >
  //       <Message id={msgId} />
  //     </SuspenseWithPerf>
  //   </div>
  // );
};

export default View;
