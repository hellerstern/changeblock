import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
    page: {
        flexDirection: "column",
        backgroundColor: "#E4E4E4",
    },
    section: {
        margin: 30,
        padding: 20,
        flexGrow: 1,
    },
});

const MyDocument = ({ data }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            {data.map((item) => {
                return (
                    <View style={styles.section}>
                        <Text>{item}</Text>
                    </View>
                );
            })}
        </Page>
    </Document>
);

export default MyDocument;
