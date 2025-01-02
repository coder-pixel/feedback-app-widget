import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import tailwindStyles from "../index.css?inline";

export const Widget = () => {
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    feedback: "",
    rating: 3,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const _handleOnChange = (key, value) => {
    const newFormFields = { ...formFields };

    if (key === "rating") {
      newFormFields[key] = +value + 1;
    } else {
      newFormFields[key] = value;
    }

    setFormFields(newFormFields);
  };

  const submit = (e) => {
    if (e) e?.preventDefault();

    const newFormFields = { ...formFields };

    const payload = {
      name: newFormFields?.name || "",
      email: newFormFields?.email || "",
      feedback: newFormFields?.feedback || "",
      rating: newFormFields?.rating || "",
    };

    console.log({ payload });
    setIsSubmitted(true);
  };
  return (
    <>
      <style>{tailwindStyles}</style>
      <div className="widget fixed bottom-4 right-4 z-50">
        <Popover>
          <PopoverTrigger asChild>
            <Button className="rounded-full shadow-lg hover:scale-105">
              <MessageCircleIcon className="mr-2 h-5 w-5" />
              Feedback
            </Button>
          </PopoverTrigger>
          <PopoverContent className="widget rounded-lg bg-card p-4 shadow-lg w-full max-w-md">
            <style>{tailwindStyles}</style>
            {isSubmitted ? (
              <div>
                <h3 className="text-lg font-bold">
                  Thank you for your feedback!
                </h3>
                <p className="mt-4">
                  We appreciate your feedback. It helps us improve our product
                  and provide better service to our customers.
                </p>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-bold">Send us your feedback</h3>
                <form className="space-y-2" onSubmit={submit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Enter your name"
                        value={formFields?.name}
                        onChange={(e) =>
                          _handleOnChange("name", e.target.value)
                        }
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        value={formFields?.email}
                        onChange={(e) =>
                          _handleOnChange("email", e.target.value)
                        }
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="feedback">Feedback</Label>
                    <Textarea
                      id="feedback"
                      placeholder="Tell us what you think"
                      className="min-h-[100px]"
                      value={formFields?.feedback}
                      onChange={(e) =>
                        _handleOnChange("feedback", e.target.value)
                      }
                    />
                  </div>
                  <div className="flex flex-col items-center justify-between">
                    <div className="flex items-start gap-2">
                      {[...Array(5)]?.map((_, index) => (
                        <StarIcon
                          key={index}
                          className={`h-5 w-5 cursor-pointer ${
                            formFields?.rating > index
                              ? "fill-primary"
                              : "fill-muted stroke-muted-foreground"
                          }`}
                          onClick={() => _handleOnChange("rating", index)}
                        />
                      ))}
                    </div>
                    <Button className="mt-2" type="submit">
                      Submit
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function MessageCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-message-circle"
    >
      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
    </svg>
  );
}
