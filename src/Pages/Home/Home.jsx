import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import ReactPlayer from "react-player";
import TestimonialsSlider from "../../Components/TestimonialsSlider/TestimonialsSlider";

export default function Home() {
  return (
    <>
      <section className={styles.Landing_Main}>
        <div className={styles.Main_Content}>
          <div>
            <div className={styles.Main_Header}>
              <h1>Chess</h1>
              <h1 className={styles.Margin_Left}>School</h1>
            </div>
            <div className={styles.Main_Sub_Header}>
              <p>
                Starting chess is easy! Leave your application and we’ll contact
                you as soon as possible!
              </p>
              <span>
                <Link>GET STUDY</Link>
              </span>
            </div>
          </div>
        </div>
        <div className={styles.Main_Image}>
          <img src="/assets/home_img.webp" alt="Home Main Image" />
        </div>
      </section>
      <section className={styles.Visit_Sec}>
        <div className={styles.Content}>
          <p className="section-sub-heading">VISIT OUR CHESS CLUB</p>
          <h2 className="section-heading">
            Building champions: in the classroom and the community
          </h2>
          <h3 className="section-24px">
            Our goal is to make chess a new trend in society. Create a useful
            alternative to social networks, primarily for the younger
            generation.
          </h3>
        </div>
        <div className={styles.Visit_sec_Details}>
          <div className={styles.Visit_Image_Wrapper}>
            <img src="/assets/home_img2.webp" alt="Boy Playing Chess" />
          </div>
          <div className={styles.Visit_Content}>
            <p>
              We’re changing the idea of chess. Chess is not only skill and
              victories in competitions. This is primarily the development of
              the logic and thinking of the child.
            </p>
            <h3>Interested in joining chess team? Call us:</h3>
            <h1>+1 234 567 8901</h1>
            <span>
              <Link>GET STUDY</Link>
            </span>
          </div>
        </div>
      </section>
      <section className={styles.Benefits_Sec}>
        <div>
          <p className="section-sub-heading">OUR BENEFITS</p>
          <h2 className="section-heading">
            Building champions: in the classroom and the community
          </h2>
          <div className={styles.Steps_grid}>
            <div>
              <img src="/assets/chess1.svg" />
              <h2>Accomplished coaches</h2>
              <p>
                Our chess school will be a springboard for your child in the
                world of high achievements.
              </p>
            </div>
            <div>
              <img src="/assets/chess2.svg" />
              <h2>Private lessons</h2>
              <p>
                Individual classes with a coach of high category, departure of
                the chess coach to your home.
              </p>
            </div>
            <div>
              <img src="/assets/chess3.svg" />
              <h2>Online community</h2>
              <p>
                Our chess school holds both internal tournaments and friendly
                meetings with pupils of other schools and clubs, constantly
                participates in championships.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.Video_sec}>
        <div className={styles.Video_wrapper}>
          <ReactPlayer
            style={{ display: "block", width: "100%" }}
            url="https://player.vimeo.com/video/486571638?autopause=0&autoplay=1&loop=1&muted=1#t="
            width="100%"
            height={635}
            playing
            loop
            muted
            controls
          />
        </div>
      </section>
      <section className={styles.Appointment_sec}>
        <div>
          <div className={styles.Appointment_Main}>
            <p className="section-sub-heading">BOOK YOUR APPOINTMENT</p>
            <h2 className="section-heading">
              Help your child improve their strategic thinking
            </h2>
          </div>
          <div className={styles.Appointment_Content}>
            <div className={styles.Appointment_Content_Grid}>
              <p>
                We guarantee that our students will enjoy the learning process
                and progress in results!
              </p>
              <p>
                Our teachers adapt the methodology for each student. We do
                everything so that you get the maximum result.
              </p>
              <p>
                Our students come with different requests. All of them are
                personalities, with a different perception of the world and the
                principles of the game.
              </p>
              <p>
                We are ready to spend more of our time to convey the necessary
                meanings and answer all the questions that arise in the process.
              </p>
            </div>
            <div className={styles.Appointment_Content_ActionLink}>
              <span>
                <Link>GET STUDY</Link>
              </span>
            </div>
          </div>
        </div>
        <img
          src="/assets/bg_sq1.webp"
          alt="background Image"
          className={styles.Bg_image}
        />
      </section>

      {/* Will Be Styled... */}
      <section className={styles.Testimonials_sec}>
        <div className={styles.Testimonials_Wrapper}>
          <div className={styles.Testimonials_Details}>
            <p className="section-sub-heading">TESTIMONIAL</p>
            <h2 className="section-heading">
              Kind words from our happy clients
            </h2>
          </div>
          <div className={styles.Testimonials_Grid}>
            {/* Testimonial Slider */}
            <TestimonialsSlider />
            {/* Image */}
            <img
              src="/assets/Testimonials_image.webp"
              alt="Boy Playing Chess"
            />
          </div>
        </div>
      </section>
    </>
  );
}
