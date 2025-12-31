import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import WhyChooseUs from './components/WhyChooseUs';
import Pricing from './components/Pricing';
import ConsultationForm from './components/ConsultationForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const Home = () => {
    return (
        <>
            <Helmet>
                <title>Ledger Shift | Enterprise Hyperledger Fabric in 14 Days</title>
                <meta name="description" content="Get a production-ready Hyperledger Fabric blockchain bundle in 14 days for $999. Enterprise-grade setup on AWS EKS with Docker and REST API." />
                <link rel="canonical" href="https://ledgershift.in/" />

                {/* Structured Data */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Ledger Shift",
                        "url": "https://ledgershift.github.io/blockchain-project/",
                        "logo": "https://ledgershift.github.io/blockchain-project/logo.png",
                        "sameAs": [
                            "https://www.linkedin.com/company/ledger-shift"
                        ]
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Enterprise Blockchain Deployment",
                        "provider": {
                            "@type": "Organization",
                            "name": "Ledger Shift"
                        },
                        "description": "Enterprise-grade Hyperledger Fabric blockchain bundle delivered in 14 days on AWS EKS.",
                        "offers": {
                            "@type": "Offer",
                            "price": "999",
                            "priceCurrency": "USD"
                        }
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": [
                            {
                                "@type": "Question",
                                "name": "What is included in the $999 bundle?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "The bundle includes a production-ready Hyperledger Fabric deployment on AWS EKS, custom chaincode, a REST API adaptor, and complete documentation."
                                }
                            },
                            {
                                "@type": "Question",
                                "name": "How long does deployment take?",
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": "We guarantee a production-ready deployment within 14 business days from the kickoff date."
                                }
                            }
                        ]
                    })}
                </script>
            </Helmet>
            <Navbar />
            <main>
                <Hero />
                <Problem />
                <Solution />
                <HowItWorks />
                <UseCases />
                <WhyChooseUs />
                <Pricing />
                <ConsultationForm />
                <FAQ />
            </main>
            <Footer />
        </>

    );
};

export default Home;
