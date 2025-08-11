// Device interface
interface Device {
  specifications(): void;
}

// Concrete Apple Devices
class AppleLaptop implements Device {
  specifications(): void {
    console.log("Apple Laptop: MacBook Pro, M1 Chip, 16GB RAM");
  }
}

class ApplePhone implements Device {
  specifications(): void {
    console.log("Apple Phone: iPhone 14, A15 Bionic, 128GB Storage");
  }
}

// Concrete Samsung Devices
class SamsungLaptop implements Device {
  specifications(): void {
    console.log("Samsung Laptop: Galaxy Book, Intel i7, 16GB RAM");
  }
}

class SamsungPhone implements Device {
  specifications(): void {
    console.log("Samsung Phone: Galaxy S22, Snapdragon 8 Gen 1, 256GB Storage");
  }
}

// Abstract Factory Interface
interface DeviceFactory {
  createDevice(type: "laptop" | "phone"): Device;
}

// Apple Factory
class AppleFactory implements DeviceFactory {
  createDevice(type: "laptop" | "phone"): Device {
    if (type === "laptop") {
      return new AppleLaptop();
    } else {
      return new ApplePhone();
    }
  }
}

// Samsung Factory
class SamsungFactory implements DeviceFactory {
  createDevice(type: "laptop" | "phone"): Device {
    if (type === "laptop") {
      return new SamsungLaptop();
    } else {
      return new SamsungPhone();
    }
  }
}

// Demonstration
function main() {
  const appleFactory = new AppleFactory();
  const samsungFactory = new SamsungFactory();

  const appleLaptop = appleFactory.createDevice("laptop");
  const samsungPhone = samsungFactory.createDevice("phone");

  appleLaptop.specifications();
  samsungPhone.specifications();
}

main();
