import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Check, Play, Tv, Users, Globe, Zap, Shield, Headphones, Menu, X, Mail, Phone, MapPin } from "lucide-react";

const plans = [
  {
    name: "Basic",
    price: "$9.99",
    period: "/month",
    description: "Perfect for casual viewers",
    features: [
      "1,000+ Live Channels",
      "HD Quality Streaming",
      "1 Device Connection",
      "Basic Support",
      "7-Day Catch Up",
      "Mobile App Access"
    ],
    popular: false,
    variant: "glass" as const
  },
  {
    name: "Premium",
    price: "$19.99",
    period: "/month",
    description: "Best value for families",
    features: [
      "3,000+ Live Channels",
      "4K Ultra HD Quality",
      "3 Device Connections",
      "Priority Support",
      "14-Day Catch Up",
      "All Device Access",
      "VOD Library (5,000+)",
      "PPV Events Included"
    ],
    popular: true,
    variant: "premium" as const
  },
  {
    name: "Ultimate",
    price: "$29.99",
    period: "/month",
    description: "For the ultimate experience",
    features: [
      "5,000+ Live Channels",
      "8K & 4K Ultra HD",
      "Unlimited Devices",
      "24/7 VIP Support",
      "30-Day Catch Up",
      "All Platform Access",
      "Premium VOD Library",
      "Exclusive Content",
      "Multi-Screen Viewing",
      "Cloud DVR (500GB)"
    ],
    popular: false,
    variant: "hero" as const
  }
];

const features = [
  {
    icon: Tv,
    title: "Premium Channels",
    description: "Access to thousands of premium channels from around the world"
  },
  {
    icon: Globe,
    title: "Global Content",
    description: "International channels and content in multiple languages"
  },
  {
    icon: Zap,
    title: "Ultra Fast",
    description: "Lightning-fast streaming with minimal buffering"
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "Encrypted streaming with 99.9% uptime guarantee"
  },
  {
    icon: Users,
    title: "Multi-Device",
    description: "Watch on any device - TV, mobile, tablet, or computer"
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Round-the-clock customer support whenever you need help"
  }
];

export default function IPTVLanding() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handlePlanSelect = (planName: string) => {
    setSelectedPlan(planName);
    console.log(`Selected plan: ${planName}`);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", contactForm);
    // Here you would typically send the form data to a backend
    alert("Thank you for your request! We'll contact you within 24 hours to set up your free test.");
    setContactForm({ name: "", email: "", phone: "", message: "" });
  };

  const handleContactChange = (field: string, value: string) => {
    setContactForm(prev => ({ ...prev, [field]: value }));
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Features", id: "features" },
    { name: "Pricing", id: "pricing" },
    { name: "Contact", id: "contact" }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
        <nav className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Play className="h-8 w-8 text-primary mr-2" />
              <span className="text-xl font-bold">StreamMax IPTV</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-foreground hover:text-primary transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
              <Button variant="hero" size="sm">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-foreground" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-border/50">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-foreground hover:text-primary transition-colors duration-200 font-medium"
                  >
                    {item.name}
                  </button>
                ))}
                <Button variant="hero" size="sm" className="w-fit">
                  Get Started
                </Button>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-32 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="" 
            alt="IPTV Streaming" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Play className="h-12 w-12 text-primary mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              StreamMax IPTV
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Experience the future of television with our premium IPTV service. 
            Thousands of channels, unlimited entertainment, anywhere you go.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl" className="text-lg">
              Start Free Trial
            </Button>
            <Button variant="glass" size="xl" className="text-lg">
              Watch Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose StreamMax IPTV?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the features that make us the leading IPTV service provider
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-glow">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4" id="pricing">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Choose Your Perfect Plan
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Flexible pricing options to suit every need and budget
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative bg-gradient-card border-border/50 transition-all duration-300 hover:shadow-elegant ${
                  plan.popular ? 'border-primary/50 shadow-glow scale-105' : 'hover:border-primary/30'
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={plan.variant}
                    size="lg" 
                    className="w-full mt-6"
                    onClick={() => handlePlanSelect(plan.name)}
                  >
                    {selectedPlan === plan.name ? 'Selected!' : 'Choose Plan'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your TV Experience?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of satisfied customers and start your journey today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="xl">
              Start 7-Day Free Trial
            </Button>
            <Button variant="glass" size="xl">
              Contact Sales
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            No credit card required • Cancel anytime • 30-day money-back guarantee
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-card/50 to-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Request Your Free 24-Hour Test
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Experience our premium IPTV service with a free 24-hour trial. Fill out the form below and we'll set up your test account within hours.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-gradient-card border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl">Get Your Free Test Account</CardTitle>
                <CardDescription>
                  Fill out the details below and we'll contact you to set up your 24-hour free trial
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your full name"
                      value={contactForm.name}
                      onChange={(e) => handleContactChange("name", e.target.value)}
                      required
                      className="bg-background/50 border-border/70"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email address"
                      value={contactForm.email}
                      onChange={(e) => handleContactChange("email", e.target.value)}
                      required
                      className="bg-background/50 border-border/70"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={contactForm.phone}
                      onChange={(e) => handleContactChange("phone", e.target.value)}
                      className="bg-background/50 border-border/70"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Information</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your viewing preferences, device types, or any specific requirements..."
                      value={contactForm.message}
                      onChange={(e) => handleContactChange("message", e.target.value)}
                      rows={4}
                      className="bg-background/50 border-border/70"
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Request Free 24-Hour Test
                  </Button>
                  
                  <p className="text-sm text-muted-foreground text-center">
                    * We'll contact you within 24 hours to set up your test account
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Email Support</h4>
                      <p className="text-muted-foreground">support@streammaxiptv.com</p>
                      <p className="text-sm text-muted-foreground">Response within 1 hour</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Phone Support</h4>
                      <p className="text-muted-foreground">+1 (555) 123-IPTV</p>
                      <p className="text-sm text-muted-foreground">24/7 Available</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Business Address</h4>
                      <p className="text-muted-foreground">123 Streaming Avenue<br />Tech City, TC 12345</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border-border/50">
                <CardHeader>
                  <CardTitle className="text-xl">What You Get</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3" />
                      <span className="text-sm">Full access to all channels for 24 hours</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3" />
                      <span className="text-sm">Test on all your devices</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3" />
                      <span className="text-sm">No credit card required</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3" />
                      <span className="text-sm">Personal setup assistance</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-5 w-5 text-primary mr-3" />
                      <span className="text-sm">No obligation to continue</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border/50">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Play className="h-8 w-8 text-primary mr-2" />
            <span className="text-2xl font-bold">StreamMax IPTV</span>
          </div>
          <p className="text-muted-foreground">
            © 2024 StreamMax IPTV. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </footer>
    </div>
  );
}