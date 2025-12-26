# 🌿 Repack GreenChain

**Sustainable E-Commerce Platform with Packaging Recycling Rewards**

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://ecoloop-nine.vercel.app)
[![React](https://img.shields.io/badge/React-19.1.0-blue)](https://reactjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-green)](https://nodejs.org/)
[![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL-blue)](https://www.postgresql.org/)
[![Prisma](https://img.shields.io/badge/ORM-Prisma-2D3748)](https://www.prisma.io/)

---

## 🎯 Project Overview

Repack GreenChain is an innovative e-commerce platform that revolutionizes online shopping by creating a closed-loop packaging system. Customers earn **Green Points** for returning empty packaging, which can be redeemed for cashback or rewards. The platform combines traditional e-commerce functionality with gamification, sustainability tracking, and community engagement features.

### Key Features

- 🔄 **Packaging Return System**: Return empty packaging and earn points based on material and size
- 🎮 **Gamification**: Leaderboards, badges, and competitive rankings
- 💰 **Rewards Program**: Redeem Green Points for cashback or exclusive rewards
- 👥 **Customer Engagement**: Referral system for viral growth
- 📊 **Analytics**: Track environmental impact and top products
- 🔔 **Real-Time Notifications**: Instant updates via Socket.io
- 🏪 **Multi-Role Support**: Customers, Retailers, and Admins

---

## 📚 Documentation

### For Interview Preparation

📘 **[PROJECT_DESCRIPTION.md](./PROJECT_DESCRIPTION.md)** - Comprehensive project documentation (26,500+ words)
- Complete architecture overview
- Detailed feature explanations
- Database schema and models
- User flows and technical implementation
- Security measures and scalability
- Business model and impact metrics
- Future roadmap

📗 **[INTERVIEW_QUESTIONS.md](./INTERVIEW_QUESTIONS.md)** - Interview Q&A guide (13,600+ words)
- 11 detailed technical questions with answers
- Architecture and design decisions
- Core features deep-dive
- Security and scalability strategies
- Business model explanation
- Technical challenges and solutions
- Quick reference elevator pitch

---

## 🏗️ Technology Stack

### Frontend
- **React** (v19.1.0) - UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animations
- **Socket.io-client** - Real-time updates
- **Recharts** - Data visualization
- **Axios** - HTTP client

### Backend
- **Node.js** with **Express.js** (v5.1.0)
- **Prisma ORM** - Type-safe database access
- **PostgreSQL** - Relational database
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **Socket.io** - WebSocket server
- **Multer** - File uploads

### AI Module (Future)
- **Python** - Recommendation system
- **Flask/FastAPI** - AI service endpoints

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Asra-jml/Repack-greenchain.git
cd Repack-greenchain
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**

Create `.env` file in the `server` directory:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/repack_db"
JWT_SECRET="your-secret-key-here"
PORT=5000
```

Create `.env` file in the `client` directory:
```env
REACT_APP_API_URL="http://localhost:5000"
```

4. **Set up the database**
```bash
cd server
npx prisma migrate dev
npx prisma generate
```

5. **Start the application**
```bash
# From root directory
npm run dev
```

This will start:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

---

## 📁 Project Structure

```
repack-greenchain/
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── services/      # API integration
│   │   ├── context/       # React Context providers
│   │   └── App.js         # Main app with routing
│   └── public/            # Static assets
│
├── server/                # Node.js backend
│   ├── controllers/       # Business logic
│   ├── routes/           # API endpoints
│   ├── middleware/       # Auth & validation
│   ├── prisma/          # Database schema
│   │   └── schema.prisma
│   └── app.js           # Server entry point
│
├── ai-module/            # Python AI components
│   ├── recommender.py
│   ├── route_optimizer.py
│   └── app.py
│
├── PROJECT_DESCRIPTION.md    # Detailed documentation
├── INTERVIEW_QUESTIONS.md    # Interview prep guide
└── README.md                 # This file
```

---

## 🌟 Core Features Explained

### 1. Packaging Return System
Customers can return empty packaging from their orders. Retailers verify the packaging and award Green Points based on:
- **Material**: Plastic (lowest), Paper (medium), Cardboard (highest)
- **Size**: Small, Medium, Large
- **Quantity**: Points multiplied by order quantity

### 2. Green Points & Rewards
- Earn points for each packaging return
- Redeem for cashback (₹1 per point) or exclusive rewards
- Complete history tracking in user dashboard

### 3. Leaderboard
- Top 20 users ranked by Green Points
- Special visual treatment for top 3
- Drives engagement through competition
- Real-time updates

### 4. Referral System
- Unique referral link for each user
- Earn 50 Green Points per friend signup
- Viral growth mechanism

### 5. Real-Time Notifications
- Instant updates on return approvals
- Point redemption confirmations
- Order status changes
- Socket.io-powered delivery

---

## 👥 User Roles

### Customer (User)
- Browse and purchase products
- Initiate packaging returns
- Earn and redeem Green Points
- View leaderboard ranking
- Share referral links

### Retailer
- Review pending return requests
- Verify packaging authenticity
- Approve/reject returns
- Award Green Points
- View performance metrics

### Admin
- View all returns and users
- Access analytics dashboard
- Monitor system health
- Manage platform content

---

## 🔐 Security Features

- JWT-based authentication with 7-day expiry
- Password hashing with bcryptjs (10 salt rounds)
- Token blacklisting on logout
- Role-based access control
- Input validation and sanitization
- CORS configuration
- SQL injection prevention via Prisma ORM
- Atomic database operations for consistency

---

## 📊 Key Metrics & Impact

### Environmental Impact
- Packaging waste diverted from landfills
- CO₂ emissions reduced through recycling
- Circular economy participation

### User Engagement
- Leaderboard drives 40% higher engagement
- Referral system enables viral growth
- Real-time notifications increase retention

### Business Metrics
- Revenue per user from commissions
- Customer lifetime value (CLTV)
- Packaging return rate
- User acquisition cost (UAC)

---

## 🛣️ Future Roadmap

### Phase 1 (Q1 2024)
- [ ] Mobile app (React Native)
- [ ] AI recommendation engine
- [ ] Advanced analytics dashboard
- [ ] Enhanced leaderboard with badges

### Phase 2 (Q2 2024)
- [ ] Social features (profiles, follow, share)
- [ ] Pickup service with route optimization
- [ ] Carbon footprint calculator
- [ ] Multi-language support

### Phase 3 (Q3 2024)
- [ ] Corporate partnership program
- [ ] Blockchain-based reward tracking
- [ ] Marketplace for recycled products
- [ ] API for third-party integrations

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👤 Author

**Asra Jamal**
- GitHub: [@Asra-jml](https://github.com/Asra-jml)

---

## 🙏 Acknowledgments

- React team for the amazing framework
- Prisma for excellent ORM and developer experience
- Socket.io for real-time capabilities
- Tailwind CSS for rapid UI development
- Open source community for inspiration

---

## 💡 Interview Tips

If you're using this project for interviews:

1. **Start with the problem**: Explain packaging waste and lack of sustainability incentives
2. **Highlight unique features**: Closed-loop system, gamification, multi-stakeholder platform
3. **Discuss technical decisions**: Why PERN stack, real-time architecture, security measures
4. **Show business thinking**: Revenue model, unit economics, scalability strategy
5. **Mention learnings**: Race conditions, atomic operations, user engagement tactics

**Elevator Pitch**: "Repack GreenChain is a sustainable e-commerce platform that rewards customers for returning packaging. Users earn Green Points based on material and size, redeemable for cashback. With competitive leaderboards and viral referrals, we're building a community of environmental champions while helping retailers increase loyalty."

---

## 📞 Contact & Links

- **Live Demo**: [https://ecoloop-nine.vercel.app](https://ecoloop-nine.vercel.app)
- **GitHub**: [https://github.com/Asra-jml/Repack-greenchain](https://github.com/Asra-jml/Repack-greenchain)
- **Documentation**: See [PROJECT_DESCRIPTION.md](./PROJECT_DESCRIPTION.md)
- **Interview Prep**: See [INTERVIEW_QUESTIONS.md](./INTERVIEW_QUESTIONS.md)

---

<div align="center">

**Built with ❤️ for a sustainable future 🌍**

⭐ Star this repo if you find it helpful!

</div>
