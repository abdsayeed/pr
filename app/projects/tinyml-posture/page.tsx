import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";

export default function TinyMLProject() {
  return (
    <div className="flex flex-col gap-8 pb-24">
      <SectionWrapper className="py-0 md:py-0 pt-0 md:pt-0">
        <div className="bg-muted p-8 md:p-12 rounded-[2rem] border border-white/5 relative overflow-hidden">
          {/* Subtle accent glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-[80px] -mr-20 -mt-20 pointer-events-none" />

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors mb-12 relative z-10"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Projects
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-white relative z-10">
            TinyML Posture Detection
          </h1>
          <p className="text-xl text-muted-foreground mb-8 relative z-10 max-w-2xl">
            A real-time, low-power machine learning system deployed on microcontrollers for intelligent physical therapy tracking.
          </p>

          <div className="flex flex-wrap gap-2 mb-12 relative z-10">
            {["C++", "Python", "TensorFlow Lite", "Jupyter", "Arduino"].map((tag) => (
              <span key={tag} className="rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-semibold text-white/80">
                {tag}
              </span>
            ))}
          </div>

          <div className="prose prose-neutral dark:prose-invert max-w-none text-muted-foreground relative z-10">
            <h3 className="text-white">The Problem</h3>
            <p>
              Poor posture can lead to chronic back pain. Most current solutions rely on bulky wearable devices or smartphone apps that require a camera pointed at the user constantly. This poses privacy concerns and high power consumption.
            </p>

            <h3 className="text-white mt-8">The Solution</h3>
            <p>
              I built a wearable TinyML solution using the <strong>Arduino Nano 33 BLE Sense</strong>. Instead of cameras, it uses onboard accelerometer and gyroscope sensors to infer spinal position. The model runs entirely on the edge, consuming less than a milliwatt of power and requiring zero internet connectivity.
            </p>

            <hr className="my-12 border-white/10" />

            <h3 className="text-white">Data Collection Pipeline</h3>
            <p>
              Training an accurate model required high-quality data. I wrote a custom C++ script to stream raw IMU telemetry via serial over USB. Using a Python listener, I logged thousands of instances of &quot;good&quot; vs. &quot;bad&quot; posture across various individuals. This dataset was cleaned, normalized, and windowed using Pandas, converting time-series sensor data into discrete inference chunks.
            </p>

            <h3 className="text-white mt-8">Model Training & Optimization</h3>
            <p>
              Using TensorFlow and Keras, I trained a lightweight Neural Network consisting of Dense and Dropout layers to avoid over-fitting on small datasets.
              To deploy to the Arduino:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>The model was converted using the TensorFlow Lite converter.</li>
              <li>Post-training quantization was applied (Int8), shrinking the model size from ~120KB to ~15KB without significant accuracy loss.</li>
              <li>The model was mapped to an edge C-array header for compilation.</li>
            </ul>

            <h3 className="text-white mt-8">Arduino Deployment</h3>
            <p>
              The final C++ implementation uses the TFLite Micro interpreter. It runs a loop fetching new sensor readings, running inference, and triggering the onboard RGB LED &mdash; Green for good posture, Red for bad posture.
            </p>
          </div>

          <div className="mt-16 pt-8 border-t border-white/5 relative z-10">
            <Link
              href="https://github.com/abdsayeed"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90 shadow-[0_0_20px_rgba(136,85,255,0.2)]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                <path d="M9 18c-4.51 2-5-2-7-2" />
              </svg>
              View Source on GitHub
            </Link>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
