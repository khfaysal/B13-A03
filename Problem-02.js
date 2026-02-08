function validOtp(otp) {
  if (typeof otp !== "string") {
    return "invalid";
  } else if (otp.length !== 8) {
    return false;
  } else if (!otp.startsWith("ph-")) {
    return false;
  } else {
    return true;
  }
}

const result = validOtp(["abc-1235"]);
console.log(result);

