import type { PostDetails } from '~/types'

const postsdata: PostDetails[] = [{
  id: 1,
  title: 'Tuzzin Product Appreciated by National Payments Corporation of India',
  description: 'Tuzzin Leadership (Mr. Jemin and Mr. Dipen) appreciated by NPCI for their Product: YoLokal (YoLokal.com)- Card Linked Offers and CashbackFrom NPCI Team: Thank you for your stimulating presentation at yesterday’s FINSPIRE 3 workshop for the Cooperative Banks of Maharashtra. We are grateful for the time and effort you took to share your expertise and ideas to the banks and address their queries. The workshop became a great success with a large group of banks participating in it and with the valuable contribution from you and many other expert speakers.Looking forward for many such collaborations.Tuzzin thanks NPCI for their great support and look forward to assist NPCI in any way possible.',
  image: '/images/NPCI-Appreciation.jpg'
}, {
  id: 2,
  title: 'Tuzzin Employee Initiative “Lets think about FREE Value-adds for our Clients!',
  description: 'Tuzzin Employees have come together and joined hands to start a Customer Centric initiative of identifying Free Value Adds for Client’s As part of this initiative- every employee will spend 2 hours per week towards free value adds – outside of their normal working hours. Each employee will identify the unspecified need of their Client, discuss with peers and come up with 3 great ideas. Employee and Management will work together to help employee work on this for 2 hours per week, ensuring it doesn’t affect the normal working hours and would be of value to the Client. <br/>Value-adds would be small delights that the Client would really appreciate above and beyond the quality and timeliness of delivery. Tuzzin Team is excited about this and have come up with some great ideas to create Customer Delight.',
  image: '/images/featured-news-06.jpg'
}, {
  id: 3,
  title: 'Tuzzin starts Employee Gym Incentive',
  description: 'Work Life Balance is critical for productivity. Exercise plays a crucial role in unwinding from work and helping with health.Tuzzin has started special incentive of additional bonus to employees hitting the Gym. Every employee will get special bonus if they regularly go to Gym. Tuzzin is committed to employee health and is proud of introducing such an initiative.',
  image: '/images/Blog-Post-Coomon-Img.jpg'
}, {
  id: 4,
  title: 'Tuzzin Launches “Technology Snapshot week for its clients',
  description: 'Tuzzin has reached out to all its clients for an initiative to help create their Technology Snapshot for Free. With the advent of disruptive technologies- there are avenues for each Business to explore the gaps. As part of this initiative- Tuzzin Experts will do a Free Technology assessment of Clients Application portfolio. Tuzzin Team will provide necessary recommendations and a detailed report inline with Clients 1 year, 3 year and 5 year objectives. This will help each of our clients to best strategize their IT spend and Technology alignment for the future. When we tossed this idea to few of our clients- they were super excited and that’s what we work hard for at Tuzzin- everyday.',
  image: '/images/Blog-Post-Coomon-Img.jpg'
}, {
  id: 5,
  title: 'Tuzzin Products accelerating Time to Market and reducing Total Cost of Ownership',
  description: 'Our products are handcrafted by our experts with sound understanding of domain, market needs and technology. Our products are built after evaluating the need and ensuring that there is a market for the same. We don’t build products to build up our portfolio. Tuzzin products have helped multiple companies reduce their development cycle and launch their own Product within a matter of weeks (not months or years). Tuzzin has also helped umpteen clients pick and chose solution components that they like and embed as features within their product. As our components and products are well settled in the market- they need minimum maintenance, thereby reducing the Total cost of Ownership. Tuzzin is proud to be a different company that believes in faster time to market and reduced total cost of ownership.',
  image: '/images/Blog-Post-Coomon-Img.jpg'
}, {
  id: 6,
  title: 'Tuzzin’s Pledge of Commitment Transparency wins appreciation',
  description: 'Tuzzin’s “Pledge of Transparency” wins appreciation from multiple clients. Tuzzin has an initiative wherein every new employee takes a pledge of transparency. Employee on the day of joining takes a pledge that he/she will always be transparent and honest in their commitments. Every employee pledges transparency about knowledge and delivery timeliness plus quality for each project. In no circumstances- employee will every over commit or under deliver and will stay true to their client about their potential- even if it means loss of Business. Tuzzin was appreciated by their customers in their global client meet for such a pledge and we are happy that our clients love us lot more, due to this pledge.',
  image: '/images/Blog-Post-Coomon-Img.jpg'
}]

export default eventHandler(async () => {
  return postsdata
})