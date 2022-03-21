import dbConnect from '../lib/dbConnect.mjs';
import Entry from '../models/Entry.mjs';

await dbConnect();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const entries = await Entry.find();
    res.json(entries);
    return;
  }

  if (req.method === 'POST') {
    const result = await Entry.create(req.body);
    res.json(result);
    return;
  }

  //Solition 1
  if (req.method === 'DELETE') {
    const entries = await Entry.findByIdAndDelete(req.body._id);
    res.json(entries);
    return;
  }

  // Solution 2
  // if (req.method === 'DELETE') {
  // const {_id} = req.body;
  // const result = await Entry.findByIdAndDelete(_id);
  // res.json(result);
  // }
}
