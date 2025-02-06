import React from 'react';

const Cardcomponents = ({ imgurl, id, title }) => {
  return (
    <div className="card" key={id} style={styles.card}>
      <img src={imgurl} alt={title} style={styles.image} />
      <h3 style={styles.title}>{title}</h3>
    </div>
  );
};

const styles = {
  card: {
   
    width: '250px',
    padding: '15px',
    textAlign: 'center',
   
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
  },
  title: {
    marginTop: '10px',
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  },
};

export default Cardcomponents;
