import Hero from "@/app/components/home/hero";
import Navbar from "@/app/components/navbar";

export default function Home() {
  // const [isLoading, setIsLoading] = useState(true);
  // const router = useRouter();
  //
  // useEffect(() => {
  //   // Set a timeout of 5 seconds before hiding the loading screen and showing the Hero section
  //   const timer = setTimeout(() => {
  //     setIsLoading(false);
  //   }, 6000); // 5000ms = 5 seconds
  //
  //   // Clean up the timeout in case the component is unmounted before the timer ends
  //   return () => clearTimeout(timer);
  // }, []);
  //
  // useEffect(() => {
  //   if (!isLoading) {
  //     router.push("/home");
  //   }
  // }, [isLoading]);

  return (
    <div className="h-screen w-screen overflow-x-hidden overflow-y-scroll">
      <Navbar />
      <Hero />
      {/* <MatrixLoading /> */}
    </div>
  );
}
