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

  if (req.method === 'DELETE') {
    const entries = await Entry.findByIdAndDelete(req.body._id);
    res.json(entries);
    return;
  }
}
