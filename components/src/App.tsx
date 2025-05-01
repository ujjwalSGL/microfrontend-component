import UICard from "@/components/elements/UICard";
import Button from "@/components/ui/button";
import { BookOpen, CloudUpload, Wallet2, X } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { UIBreadCrumb } from "@/components/elements/UIBreadCrumb";
import UIPopover, {
  UIPopoverAlign,
  UIPopoverSide,
} from "@/components/elements/UIPopover";
import Dialog from "@/components/elements/Dialog";
import { useEffect, useState } from "react";
import UIPagination from "./components/elements/UIPagination";

function App() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    console.log("open", open);
  }, [open]);

  return (
    <div className="flex flex-col items-center justify-center py-10 gap-20">
      <UIPagination totalPages={10} href="/orders" />

      <UICard
        className="min-w-lg w-[52rem] md:min-w-[56rem]"
        heading={
          <div className="flex items-center justify-between text-lg gap-2 border-b border-b-gray-300 pb-2">
            Import Orders
            <X />
          </div>
        }
        // subheading="This is a subheading"
        content={
          <div className="py-5 px-4">
            <div className="bg-gray-100 border-dashed border-2 border-gray-300 rounded-md">
              <div className="flex flex-col items-center justify-center h-60 text-blue-900 font-semibold gap-3">
                <CloudUpload size={40} />
                <p> Drag and Drop file here</p>
                <p>-OR-</p>
                <p className="hover:underline cursor-pointer">Browse File</p>
              </div>
            </div>
            <p className="text-xs mt-8 font-medium">
              Upload Excel or CSV file size less than 100mb
            </p>
          </div>
        }
        footer={
          <div className="flex flex-col items-center justify-center w-full">
            <Button className="bg-blue-900 px-6 py-5 hover:bg-blue-950 rounded-sm">
              Upload
            </Button>
          </div>
        }
      />
      <UICard
        className="max-w-lg w-[40rem] pb-36"
        heading={
          <div className="flex items-center justify-between text-lg gap-2 border-b border-b-gray-300 pb-2">
            Create Pickup Request
          </div>
        }
        // subheading="This is a subheading"
        content={
          <div className="space-y-6 mt-3 ">
            <div className="space-y-1">
              <Label>
                Select Pickup Address <span className="text-red-500">*</span>
              </Label>
              <Input placeholder="Select" className="rounded-sm" />
            </div>
            <div className="space-y-1">
              <Label>
                Estimated Numbers of Orders
                <span className="text-red-500">*</span>
              </Label>
              <Input
                placeholder="Enter Estimated Number of Orders . . ."
                className="rounded-sm"
              />
            </div>
            <div className="space-y-1">
              <Label>
                Estimated Numbers of Orders{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Input
                placeholder="Enter Estimated Weight (in KG) . . ."
                className="rounded-sm"
              />
            </div>
          </div>
        }
        footer={
          <div className="flex items-center justify-end w-full gap-4 mt-10">
            <Button
              variant={"outline"}
              className="px-6 py-5 rounded-sm border-blue-800 border text-blue-900"
            >
              Cancel
            </Button>
            <Button className="bg-blue-900 px-6 py-5 rounded-sm hover:bg-blue-950  ">
              Submit
            </Button>
          </div>
        }
      />

      <UICard
        className="max-w-lg w-[40rem] pb-10"
        heading={
          <div>
            <p className="flex items-end justify-end text-gray-500">
              <X />
            </p>
            <div className="flex flex-col items-center justify-center text-lg gap-2 pb-2">
              <Wallet2 size={36} />
              Recharge Wallet
            </div>
          </div>
        }
        // subheading="This is a subheading"
        content={
          <div className="space-y-6 mt-3">
            <div className="space-y-1">
              <Label>
                Enter Recharge Amount <span className="text-red-500">*</span>
              </Label>
              <Input placeholder="100 rs" className="rounded-sm" />
            </div>
            <p className="font-bold">Select Payment Method</p>
            <div className="space-y-4">
              <UICard
                className="shadow-none rounded-xs bg-indigo-100 hover:bg-indigo-200 cursor-pointer border-none py-0 pb-4"
                content={
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">
                        CashFree - Online Payments
                      </p>
                      <p className="text-xs text-gray-500">
                        Pay using Credit/Debit Card, UPI, Net Banking
                      </p>
                    </div>
                    <p>icon</p>
                  </div>
                }
              />
              <UICard
                className="shadow-none rounded-xs border-gray-200 hover:bg-indigo-200 cursor-pointer py-0 pb-4"
                content={
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold">
                        CashFree - Online Payments
                      </p>

                      <p className="text-xs text-gray-500">
                        Pay using Credit/Debit Card, UPI, Net Banking
                      </p>
                    </div>
                    <p>icon</p>
                  </div>
                }
              />
            </div>
          </div>
        }
        footer={
          <div className="flex items-center justify-center w-full gap-4 mt-10">
            <Button className="px-6 py-5 rounded-sm bg-blue-900 hover:bg-blue-950">
              Proceed to Payment
            </Button>
          </div>
        }
      />

      <Dialog
        trigger={<Button>Open Dialog</Button>}
        title="Confirmation"
        description="Are you sure you want to Logout?"
        cancel="Cancel"
        action={{
          handler: () => console.log("Logout"),
          label: "Logout",
        }}
        open={open}
        setOpen={setOpen}
      />

      <UIBreadCrumb
        breadcrumbItems={[
          { label: "Home", href: "/" },
          { label: "Orders", href: "/" },
          { label: "Import Orders", currentPage: true },
        ]}
      />

      <UIPopover
        triggerTitle={
          <Button variant={"outline"}>
            <BookOpen /> Library
          </Button>
        }
        content={<div>Hello from Library</div>}
        side={UIPopoverSide.LEFT}
        align={UIPopoverAlign.CENTER}
      />
    </div>
  );
}

export default App;
