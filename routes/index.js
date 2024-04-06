import { Router } from 'express';
const router = Router();
const formatDate = (dateString) => {
  const options = {
    year: 'numeric',
    month: 'long',
  };
  const date = new Date(dateString);
  const formattedDate = date.toLocaleDateString('ru', options);
  return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
};

router.get('/', (req, res) => {
  res.render('home', { title: 'home' });
});

router.get('/login', (req, res) => {
  res.render('login');
});
router.get('/registration', (_, res) => {
  res.render('registration');
});

router.get('/admin', async (req, res) => {
  const request = await RequestModel.getRequestData();
  const formattedDate = request.map((item) => ({
    ...item,
    booking_data: formatDate(item.booking_date),
  }));
  res.render('admin', { title: 'admin', formattedDate });
});

export default router;
