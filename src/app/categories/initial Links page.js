'use client';
import { Button } from "@nextui-org/button";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';




export default function Home() {
  const router = useRouter();

  const handleNavigation = (props) => {
    router.push(`/${props}`);
  };
  
  useEffect(() => {
    function getSearchBarHeight() {
      console.log(window.visualViewport.height);
      return window.innerHeight - window.visualViewport.height;
    }
  
    function adjustContainerHeight() {
      var searchbarHeight = getSearchBarHeight();
      var container = document.querySelector('main');
      container.style.height = `calc(100vh - ${searchbarHeight}px)`;
    }
    // Run on initial load
    adjustContainerHeight();
  
    // Add event listener for window resize
    window.addEventListener('resize', adjustContainerHeight);
  
    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', adjustContainerHeight);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-16 lg:p-24 ">
      <div className="w-full max-w-md text-center">
        <h1 className="text-3xl md:text-5xl mb-6">
          Home Page
        </h1>
        <div className="flex flex-col gap-4">
          <Button
            onPress={() => handleNavigation('admin/login')}
            className="w-full rounded h-3rem"
            color="primary"
          >
            Admin Login 1st step
          </Button>
          <Button
            onPress={() => handleNavigation('admin/login/securitykey')}
            className="w-full rounded h-3rem"
            color="primary"
          >
            Admin Login 2nd step
          </Button>
          <Button
            onPress={() => handleNavigation('admin/login/securitykey/otp')}
            className="w-full rounded h-3rem"
            color="primary"
          >
            Admin Login 3rd step
          </Button>
          <Button
            onPress={() => handleNavigation('admin/dashboard')}
            className="w-full rounded h-3rem"
            color="primary"
          >
            Admin Dashboard Initial Setup
          </Button>
          <Button
            onPress={() => handleNavigation('creator/blogs')}
            className="w-full rounded h-3rem"
            color="primary"
          >
            Creator Initial Setup
          </Button>
          <Button
            onPress={() => handleNavigation('manager/User_Team_Management')}
            className="w-full rounded h-3rem"
            color="primary"
          >
            Manager Page
          </Button>
        </div>
      </div>
    </main>
  );
}


{/* <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-16 lg:p-24">
<div className="w-full max-w-md text-center">
  <h1 className="text-3xl md:text-5xl mb-6">Home Page</h1>
  <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <Button
      onPress={() => handleNavigation('admin/login')}
      className="w-full rounded h-3rem"
      color="primary"
    >
      Admin Login 1st step
    </Button>
    <Button
      onPress={() => handleNavigation('admin/login/securitykey')}
      className="w-full rounded h-3rem"
      color="primary"
    >
      Admin Login 2nd step
    </Button>
    <Button
      onPress={() => handleNavigation('admin/login/securitykey/otp')}
      className="w-full rounded h-3rem"
      color="primary"
    >
      Admin Login 3rd step
    </Button>
    <Button
      onPress={() => handleNavigation('admin/dashboard')}
      className="w-full rounded h-3rem"
      color="primary"
    >
      Admin Dashboard Initial Setup
    </Button>
    <Button
      onPress={() => handleNavigation('creator/blogs')}
      className="w-full rounded h-3rem"
      color="primary"
    >
      Creator Initial Setup
    </Button>
    <Button
      onPress={() => handleNavigation('manager/User_Team_Management')}
      className="w-full rounded h-3rem"
      color="primary"
    >
      Manager Page
    </Button>
  </div>
</div>
</main> */}