const Series = require('../models/series-model');
const db = require('../db');

exports.getSeriesData = async (req, res) => {
  console.log('getSeriesData called');
  const collectionName = req.params.collectionName;
  console.log('collectionName:', collectionName);
  const collection = db.collection(collectionName);

  // Validate collectionName
  if (!collectionName || typeof collectionName !== 'string') {
    return res.status(400).json({ message: 'Invalid collection name' });
  }

  try {
    const database = await db(); // Call the db function to get the database instance
    const collection = database.collection(collectionName);
    const data = await collection.find().toArray();
    console.log(data);
    const response = await res.json(data);
  } catch (err) {
    console.error('Error fetching data:', err);
    res.status(500).json({ message: 'Error fetching data' });
  }

  // try {
  //   const collection = db.collection(collectionName);
  //   const data = await collection.find().toArray();
  //   console.log(data);
  //   res.json(data);
  // } catch (err) {
  //   console.error('Error fetching data:', err);
  //   res.status(500).json({ message: 'Error fetching data' });
  // }

  // try {
  //   const data = await collection.find().toArray();
  //   console.log(data);
  //   res.json(data);
  // } catch (err) {
  //   console.error(err);
  //   res.status(500).json({ message: 'Error fetching data' });
  // }
};

// const series = async (req, res) => { 
//     try{ 
//       // const data = await Series.find(); 
//       const data = req.params.title;
//       await Series.findOne({title: title});
//       console.log(data);
//       if(!data) { 
//         res.status(400).json("No data found") 
//       } else { 
//         console.log("User Data:", data); 
//         res.status(200).json(data) 
//       } 
//     } catch (err) { 
//       console.log("Backend error", err); 
//       res.status(500).json("Internal Server Error")
//     } 
// }

// module.exports = {series}
