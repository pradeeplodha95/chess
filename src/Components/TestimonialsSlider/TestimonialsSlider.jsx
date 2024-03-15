import styles from "./TestimonialsSlider.module.css";

export default function TestimonialsSlider() {
  return (
    <div className={styles.Testimonial_Slider_wrapper}>
      <div className={styles.Testimonial_Slides}>
        <div className={styles.Testimonial_Slide}>Slide01</div>
        <div className={styles.Testimonial_Slide}>Slide01</div>
        <div className={styles.Testimonial_Slide}>Slide01</div>
      </div>
    </div>
  );
}
