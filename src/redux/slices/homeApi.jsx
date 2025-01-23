import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import client from "../../setup/axiosClient";

export const initializeAppData = createAsyncThunk("app/initializeData", async (_, { rejectWithValue }) => {
    try {
        const [
            bannersResponse, 
            upperSectionResponse, 
            tryOurNewProductResponse,
            mustTryResponse, 
            allTimeBestSellerResponse, 
            lowerSectionResponse1,
            productSectionResponse,
            blogsResponse, 
            statisticsResponse, 
            lowerSectionResponse2
        ] = await Promise.all([
            client.get("/ecommerce/banners/?sequence=Upper"),
            client.get("/sogood-section/?type=Upper"),
            client.get("/newarrival/list"),
            client.get("/musttry/list"),
            client.get("/bestofalltime/list"),
            client.get("/sogood-section/?type=Lower"),
            client.get("/sogood-section/?type=Product"),
            client.get("/home/blogs/"),
            client.get("/statistics-section/"),
            client.get("/lower-section/"),
        ]);

        return {
            banners: bannersResponse.data.banner || [],
            upperSection: upperSectionResponse.data.data || [],
            newArrival: tryOurNewProductResponse.data.data || [],
            mustTry: mustTryResponse.data.data || [],
            bestSeller : allTimeBestSellerResponse.data.data || [],
            productSection: productSectionResponse.data.data || [],
            lowerSection1: lowerSectionResponse1.data.data || [],
            blogs: blogsResponse.data.blogs || [],
            statistics: statisticsResponse.data.data || {},
            lowerSection2: lowerSectionResponse2.data.data || [],
        };
    } catch (error) {
        return rejectWithValue(error.message);
    }
});

const bannerSlice = createSlice({
    name: "home",
    initialState : {
            banners: [],
            upperSection: {
                aboutSection: [],
                certificateSection: [],
                ethicalSection: [],
            },
            newArrival: [],
            mustTry: [],
            bestSeller: [],
            productSection: {
                upperProductSection: [],
                muesliSection: [],
                middleProductSection: [],
                instantMixSection: [],
                internationalSection: [],
            },
            lowerSection1: {
               licensesSection: [],
                nonGmoSection: [],
            },
            
            blogs: [],
            statisticsSection: {},
            lowerSection2: {
                awardsSection: [],
                servicesSection: [],
                availableSection: [],
            },
            loading: false,
            error: null,
            hasFetched: false,
        },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(initializeAppData.pending, (state) => {
                state.loading = true;
            })
            .addCase(initializeAppData.fulfilled, (state, action) => {
                state.loading = false;
                const { banners, upperSection, newArrival, mustTry, bestSeller, productSection, lowerSection1,  blogs, statistics, lowerSection2 } = action.payload;

                state.banners = banners;
                state.hasFetched = true;

                // Organize upperSection data
                state.upperSection = {
                    aboutSection: upperSection.filter((section) => section.id === 1),
                    certificateSection: upperSection.filter((section) => section.id === 2),
                    ethicalSection: upperSection.filter((section) => section.id === 3),
                };

                state.newArrival = newArrival;
                state.mustTry = mustTry;
                state.bestSeller = bestSeller;

                 // Organize productSection data
                 state.productSection = {
                    upperProductSection: productSection.filter((section) => section.id === 4),
                    muesliSection: productSection.filter((section) => section.id === 5),
                    middleProductSection: productSection.filter((section) => section.id === 6),
                    instantMixSection: productSection.filter((section) => section.id === 7),
                    internationalSection: productSection.filter((section) => section.id === 8),
                };

                // Organize lowerSection1 data
                state.lowerSection1 = {
                    licensesSection: lowerSection1.filter((section) => section.id === 9),
                    nonGmoSection: lowerSection1.filter((section) => section.id === 10),
                };

                state.blogs = blogs;
                state.statisticsSection = statistics;

                // Organize lowerSection2 data
                state.lowerSection2 = {
                    awardsSection: lowerSection2.filter((section) => section.id === 1),
                    servicesSection: lowerSection2.filter((section) => section.id === 2),
                    availableSection: lowerSection2.filter((section) => section.id === 3),
                };
                state.hasFetched = true
            })
            .addCase(initializeAppData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default bannerSlice.reducer;
