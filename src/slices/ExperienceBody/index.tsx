import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ExperienceBody`.
 */
export type ExperienceBodyProps =
  SliceComponentProps<Content.ExperienceBodySlice>;

/**
 * Component for "ExperienceBody" Slices.
 */
const ExperienceBody = ({ slice }: ExperienceBodyProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="-mt-32"
    >
      
      <div className="ml-6 mt-8 max-w-prose md:ml-12 md:mt-16">
          <Heading as="h3" size="sm">
            <>{slice.primary.title}</>
          </Heading>

          <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
            <span><>{slice.primary.time_period}</></span>{" "}
            <span className="text-3xl font-extralight">/</span>{" "}
            <span><>{slice.primary.institution}</></span>
          </div>
          <div className="prose prose-lg prose-invert mt-4">
            <PrismicRichText field={slice.primary.description} />
          </div>
        </div>
    </Bounded>
  );
};

export default ExperienceBody;
