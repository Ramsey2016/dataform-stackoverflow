function professionGroup(Profession) {
  return `CASE
          WHEN ${Profession} IN ("CE", "PA") THEN "Customer Engineering"
          ELSE "Other"
          END `;
}
module.exports = { professionGroup };