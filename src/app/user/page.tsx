import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import UserDashboard from '@/components/UserDashboard';

export default function UserPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <UserDashboard />
      <Footer />
    </div>
  );
}